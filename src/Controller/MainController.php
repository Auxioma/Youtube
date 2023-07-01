<?php

namespace App\Controller;

use App\Repository\SliderRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    public function __construct(
        private SliderRepository $SliderRepository
    )
    {}

    #[Route('/', name: 'app_main')]
    public function index(): Response
    {

        return $this->render('main/HomePage.html.twig', [
            'sliders' => $this->SliderRepository->findBy(['IsActive' => true])
        ]);
    }
}
