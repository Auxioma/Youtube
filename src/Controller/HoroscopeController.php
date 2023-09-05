<?php

namespace App\Controller;

use App\Repository\SpecialiteVoyanceRepository;
use App\Services\HoroscopeServices;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HoroscopeController extends AbstractController
{
    public function __construct(
        private HoroscopeServices $HoroscopeServices,
        private SpecialiteVoyanceRepository $SpecialiteVoyanceRepository
    )
    {}

    #[Route('/horoscope', name: 'app_horoscope_list')]
    public function list(): Response
    {
       return $this->render('horoscope/list.html.twig', [
            'horoscopes' => $this->HoroscopeServices->list(),
            'specialites' => $this->SpecialiteVoyanceRepository->findAll(),
        ]);
    }


    #[Route('/horoscope/{slug}', name: 'app_horoscope')]
    public function index($slug): Response
    {
        return $this->render('horoscope/horoscope.html.twig', [
            'horoscope' => $this->HoroscopeServices->getHoroscope($slug),
            'zodiac' => ['belier', 'taureau','gemeaux', 'cancer', 'lion', 'vierge', 'balance','scorpion', 'sagittaire','capricorne',  'verseau', 'poissons'],
        ]);
    }
}