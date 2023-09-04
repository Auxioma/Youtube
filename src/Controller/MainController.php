<?php

namespace App\Controller;

use App\Repository\ArticleBlogRepository;
use App\Repository\AvisRepository;
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
        private ArticleBlogRepository $ArticleBlog,
        private AvisRepository $AvisRepository
    )
    {}

    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        $avis = $this->AvisRepository->findAll();
        $moyenne = 0;
        foreach ($avis as $item) {
            $moyenne += $item->getNote();
        }

        $moyenne = $moyenne / count($avis);

        /**
         * je met dans un [] le % des avis Tres satisfait 3 à 5
         * satisfait 2 à 3
         * pas satisfait 1 à 2
         */
        $moyenneAvis = [
            'tresSatisfait' => round(count($this->AvisRepository->findBy(['Note' => 5, 'Note' => 4])) / count($avis) * 100),
            'pasSatisfait' => round(count($this->AvisRepository->findBy(['Note' => 3, 'Note' => 2])) / count($avis) * 100),
            'pasDuToutSatisfait' => round(count($this->AvisRepository->findBy(['Note' => 1])) / count($avis) * 100),
        ];

        return $this->render('main/HomePage.html.twig', [
            'sliders' => $this->SliderRepository->findBy(['IsActive' => true]),
            'modeDeConsultations' => $this->ModeDeConsultationRepository->findAll(),
            'horoscopes' => ['belier', 'taureau','gemeaux', 'cancer', 'lion', 'vierge', 'balance','scorpion', 'sagittaire','capricorne',  'verseau', 'poissons'],
            'articleBlogs' => $this->ArticleBlog->findBy(['IsActive' => true], ['id' => 'DESC'], 3),
            'moyenne' => $moyenne,
            'moyenneAvis' => $moyenneAvis
        ]);
    }
}
