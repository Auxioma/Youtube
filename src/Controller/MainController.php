<?php

namespace App\Controller;

use App\Repository\ArticleBlogRepository;
use App\Repository\ModeDeConsultationRepository;
use App\Repository\SliderRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    public function __construct(
        private SliderRepository $SliderRepository,
        private ModeDeConsultationRepository $ModeDeConsultationRepository,
        private ArticleBlogRepository $ArticleBlog
    )
    {}

    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        return $this->render('main/HomePage.html.twig', [
            'sliders' => $this->SliderRepository->findBy(['IsActive' => true]),
            'modeDeConsultations' => $this->ModeDeConsultationRepository->findAll(),
            'horoscopes' => ['belier', 'taureau','gemeaux', 'cancer', 'lion', 'vierge', 'balance','scorpion', 'sagittaire','capricorne',  'verseau', 'poissons'],
            'articleBlogs' => $this->ArticleBlog->findBy(['IsActive' => true], ['id' => 'DESC'], 3)
        ]);
    }
}
