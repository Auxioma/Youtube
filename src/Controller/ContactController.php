<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ContactController extends AbstractController
{

    public function __construct(
        private MailerInterface $mailer
    ){}

    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request); 

        if ($form->isSubmitted() && $form->isValid()) {
            // Envoie du Mail
            $email = (new TemplatedEmail())
                ->from($form->get('Email')->getData())
                ->to('no-reply@127.0.0.1.fr')
                ->subject('Nouveaux message depuis le formulaire de contact')
                ->htmlTemplate('email/contact/contact.html.twig')
                ->context(
                    [
                        'Nom' => $form->get('Nom')->getData(),
                        'Email' => $form->get('Email')->getData(),
                        'Sujet' => $form->get('Sujet')->getData(),
                        'Message' => $form->get('Message')->getData(),
                    ]
                )
            ;
            $this->mailer->send($email);

            // Message Flash
            $this->addFlash('success', 'Votre message a bien été envoyé !');

            // Redirection
            return $this->redirectToRoute('app_contact');

        }


        return $this->render('contact/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

}