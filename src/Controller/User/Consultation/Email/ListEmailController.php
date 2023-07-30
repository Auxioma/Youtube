<?php

namespace App\Controller\User\Consultation\Email;

use Symfony\Component\HttpFoundation\Response;
use App\Repository\ConsultationEmailRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ListEmailController  extends AbstractController
{
    #[Route('/user/list-consultation-mail', name: 'user_consultation_email_list')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(ConsultationEmailRepository $consultationEmailRepository): Response
    {
        return $this->render('user/consultation_email/list.html.twig', [
            'consultation_emails' => $consultationEmailRepository->findBy(['User' => $this->getUser()->getProfile()]),
        ]);
    }

    #[Route('/user/list-consultation-mail/{id}', name: 'user_consultation_email_show')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function show(ConsultationEmailRepository $consultationEmailRepository, $id): Response
    {
        return $this->render('user/consultation_email/show.html.twig', [
            'consultation' => $consultationEmailRepository->findOneBy(['id' => $id, 'User' => $this->getUser()->getProfile()]),
        ]);
    }
}