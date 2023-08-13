<?php

namespace App\Controller\Admin;

use App\Repository\ModeDeConsultationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    #[Route('/admin/dashboard', name: 'app_dashboard')]
    public function index(ModeDeConsultationRepository $ModeDeConsultationRepository): Response
    {
        return $this->render('admin/dashboard/index.html.twig', [
            'modedeconsultations' => $ModeDeConsultationRepository->findAll(),
        ]);
    }
}
