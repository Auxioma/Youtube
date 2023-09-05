<?php

namespace App\Controller\User\Consultation\Email;

use App\Entity\ConsultationEmail;
use App\Entity\SoldeCompteClient;
use App\Entity\TarifConsultation;
use Symfony\Component\Mime\Email;
use App\Form\ConsultationEmailType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\ConsultationEmailRepository;
use App\Repository\SoldeCompteClientRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ConsultationEmailController extends AbstractController
{
    public function __construct(
        private MailerInterface $mailer
    ){}
    
    #[Route('/user/consultation-email/{Slug}', name: 'user_consultation_email')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(
        TarifConsultation $TarifConsultation,
        Request $request,
        ConsultationEmailRepository $consultationRepository,
        SoldeCompteClientRepository $soldeCompteClientRepository
    ): Response
    {
        // si le solde du compte client n'as pas assez d'argent pour payer la consultation
        // on le renvoie vers la page de paiement avec un message d'avertissement sur son solde
        $SoldeRestantCompteClient = $this->getUser()->getProfile()->getSoldeCompteClients()->last()->getPrixRestant();
        if ($SoldeRestantCompteClient < $TarifConsultation->getPrice()) {
            $this->addFlash('danger', 'Votre solde est insuffisant pour payer cette consultation, veuillez recharger votre compte');
            return $this->redirectToRoute('user_forfait');
        }

        $consultationEmail = new ConsultationEmail();
        $form = $this->createForm(ConsultationEmailType::class, $consultationEmail);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // enregistrement de la consultation
            $consultationEmail->setUser($this->getUser()->getProfile());
            $consultationRepository->save($consultationEmail, true);

            // enregistrement du paiement
            $paiement = $SoldeRestantCompteClient - $TarifConsultation->getPrice();

            $SoldeCompteClient = new SoldeCompteClient();
            $SoldeCompteClient->setCustomer($this->getUser()->getProfile());
            $SoldeCompteClient->setPrixRestant($paiement);
            $SoldeCompteClient->setTypeDeConsultation('Email');
            $soldeCompteClientRepository->save($SoldeCompteClient, true);

            // envoie d'un mail pour prévenir l'administrateur
            $email = (new Email())
                ->from('no-reply@ursuliah.com')
                ->to($_ENV['EMAIL_FROM'])
                ->priority(Email::PRIORITY_HIGH)
                ->subject('Nouvelle consultation par Email')
                ->text('Nouvelle consultation par Email')
                ->html('<p>Xavier, tu as une neouvelle consultation par Email.</p>');
            $this->mailer->send($email);


            $this->addFlash('success', 'Votre consultation a été enregistrée avec succès');
            return $this->redirectToRoute('user_consultation_email_list');

        }

        return $this->render('user/consultation_email/consultation_e_mail.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}