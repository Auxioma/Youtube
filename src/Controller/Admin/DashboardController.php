<?php

namespace App\Controller\Admin;

use App\Repository\ModeDeConsultationRepository;
use App\Repository\TicketPaiementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    public function __construct(
        private ModeDeConsultationRepository $ModeDeConsultationRepository,
        private TicketPaiementRepository $TicketPaiementRepository
    ){}

    #[Route('/admin/dashboard', name: 'app_dashboard')]
    public function index(): Response
    {
        $date = new \DateTimeImmutable();
        // 1er jour du mois en cours
        $firstDayOfMonth = $date->modify('first day of this month');
        // Dernier jour du mois en cours
        $lastDayOfMonth = $date->modify('last day of this month');

        return $this->render('admin/dashboard/index.html.twig', [
            'modedeconsultations' => $this->ModeDeConsultationRepository->findAll(),
        ]);
    }
}
