<?php

namespace App\Controller\User\Consultation\Email;

use Symfony\Component\HttpFoundation\Response;
use App\Repository\TarifConsultationRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PrixConsultationParEmailController extends AbstractController
{
    #[Route('/user/prix-consultation-mail', name: 'user_prix_consultation_par_email')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(TarifConsultationRepository $tarifConsultationRepository): Response
    {
        return $this->render('User/consultation_email/PrixConsultationParEmail.html.twig', [
            'tarifConsultations' => $tarifConsultationRepository->findBy(['ModeDeConsultation' => 'Email']),
        ]);
    }
}