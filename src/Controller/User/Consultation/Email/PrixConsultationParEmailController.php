<?php

namespace App\Controller\User\Consultation\Email;

use App\Repository\TarifConsultationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PrixConsultationParEmailController extends AbstractController
{
    #[Route('/user/prix-consultation-mail', name: 'user_prix_consultation_par_email')]
    public function index(TarifConsultationRepository $tarifConsultationRepository): Response
    {
        return $this->render('User/consultation_email/PrixConsultationParEmail.html.twig', [
            'tarifConsultations' => $tarifConsultationRepository->findBy(['ModeDeConsultation' => 'Email']),
        ]);
    }
}