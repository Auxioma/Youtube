<?php

namespace App\Controller\User;

use Stripe\Stripe;
use App\Entity\TicketPaiement;
use App\Services\CartServices;
use App\Entity\SoldeCompteClient;
use App\Repository\TicketPaiementRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\SoldeCompteClientRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CartController extends AbstractController
{
    public function __construct(
        private CartServices $cartServices,
        private MailerInterface $mailer
    ){}

    #[Route('/user/panier/{id}', name: 'user_panier')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(int $id)
    {
        $this->cartServices->add($id);

        return $this->redirectToRoute('user_panier_show');
    }

 
    #[Route('/user/panier', name: 'user_panier_show')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function show(): Response
    {
        $cardSData = $this->cartServices->getFullCart();
        $total = $this->cartServices->getTotal();

        return $this->render('user/forfait/cart.html.twig', [
            'products' => $cardSData,
            'total' => $total
        ]);
    }

    #[Route('/user/chekout', name: 'user_chekout')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function chekout()
    {
        $total = $this->cartServices->getTotal();

        $sripeSK = $_ENV['STRIPE_SK'];
        Stripe::setApiKey($sripeSK);

        $lineItems = [];
        foreach($this->cartServices->getFullCart() as $product) {
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'eur',
                    'unit_amount' => $product['product']->getPriceTTC() * 100,
                    'product_data' => [
                        'name' => $product['product']->getName(),
                        'description' => $product['product']->getBonusProduct()->getName() . ' ' . $product['product']->getBonusProduct()->getPrice(),
                        ],
                        
                    ],
                'quantity' => $product['quantity'],
            ];
        }

        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => "https://ursuliah.com/user/success?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => $this->generateUrl('user_panier_show', [], UrlGeneratorInterface::ABSOLUTE_URL),
        ]);

        return $this->redirect($session->url, 303);
    }

    #[Route('/user/success', name: 'user_success')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function success(Request $request, TicketPaiementRepository $ticketPaiementRepository, SoldeCompteClientRepository $SoldeCompteClientRepository): Response
    {
        $cart = $this->cartServices->getFullCart();
        $name = array_column($cart, 'product');

        $sessionsID = $request->query->get('session_id');
        $stripe      = new \Stripe\StripeClient($_ENV['STRIPE_SK']);
        $session     = $stripe->checkout->sessions->retrieve($sessionsID);
        $paymentIntent = $stripe->paymentIntents->retrieve($session->payment_intent);
        $customer = $stripe->customers->retrieve($paymentIntent->customer);

        $TicketPaiement = new TicketPaiement();
        $TicketPaiement->setSecureKey($customer->id);
        $TicketPaiement->setTotalPaidTTC($paymentIntent->amount_received / 100);
        $TicketPaiement->setInvoiceNumber($customer->invoice_prefix);
        $TicketPaiement->setDiscount('0.00');
        $TicketPaiement->setNameProduct($name[0]->getName());
        $TicketPaiement->setCustomer($this->getUser()->getProfile()); // $this->getUser() is the current user
        $TicketPaiement->setCreatedAt(new \DateTimeImmutable());
        $ticketPaiementRepository->save($TicketPaiement, true);

        // prevoir un system de calcul sur le prix restant

        // pour le solde du compte client, je vais faire paiement + bonus
        $SoldeAvecBonus = $paymentIntent->amount_received / 100 + $name[0]->getBonusProduct()->getPrice();

        $soldeCompteClient = new SoldeCompteClient();
        $soldeCompteClient->setCustomer($this->getUser()->getProfile());
        $soldeCompteClient->setPrixRestant($SoldeAvecBonus);
        $SoldeCompteClientRepository->save($soldeCompteClient, true);

        $email = (new TemplatedEmail())
            ->from($_ENV['EMAIL_FROM'])
            ->to($this->getUser()->getEmail())
            ->subject('Votre paiement à été confirmé')
            ->htmlTemplate('email/email/confirmation_de_paiement.html.twig')
            ->context([
                'name' => $this->getUser()->getProfile()->getNom(),
                'address' => $this->getUser()->getProfile()->getAdresse(),
                'city' => $this->getUser()->getProfile()->getVille(),
                'postalCode' => $this->getUser()->getProfile()->getCodePostal(),
                'country' => $this->getUser()->getProfile()->getPays(),
                'invoiceNumber' => $customer->invoice_prefix,
                'forfait' => $name[0]->getName(),
                'total' => $paymentIntent->amount_received / 100,
                'discount' => '0.00',
            ]);
        $this->mailer->send($email);

        $this->cartServices->removeAll();

        return $this->render('user/forfait/success.html.twig', [
            'session' => $session,
            'paymentIntent' => $paymentIntent,
            'customer' => $customer,
        ]);


    }
}