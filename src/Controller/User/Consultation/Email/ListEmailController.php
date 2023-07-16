<?php

namespace App\Controller\User\Consultation\Email;

use App\Repository\ConsultationEmailRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ListEmailController  extends AbstractController
{
    #[Route('/user/list-consultation-mail', name: 'user_consultation_email_list')]
    public function index(ConsultationEmailRepository $consultationEmailRepository): Response
    {
        return $this->render('user/consultation_email/list.html.twig', [
            'consultation_emails' => $consultationEmailRepository->findBy(['User' => $this->getUser()->getProfile()]),
        ]);
    }

    #[Route('/user/list-consultation-mail/{id}', name: 'user_consultation_email_show')]
    public function show(ConsultationEmailRepository $consultationEmailRepository, $id): Response
    {
        return $this->render('user/consultation_email/show.html.twig', [
            'consultation' => $consultationEmailRepository->findOneBy(['id' => $id, 'User' => $this->getUser()->getProfile()]),
        ]);
    }
}