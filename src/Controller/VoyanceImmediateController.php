<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ModeDeConsultationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VoyanceImmediateController extends AbstractController
{
    public function __construct(
        private ModeDeConsultationRepository $modeDeConsultationRepository
    ){}

    #[Route('/voyance-immediate/{Slug}', name: 'app_voyance_immediate')]
    public function index($Slug): Response
    {
        return $this->render('voyance_immediate/index.html.twig', [
            'modeDeConsultation' => $this->modeDeConsultationRepository->findOneBy(['Slug' => $Slug])
        ]);
    }
}