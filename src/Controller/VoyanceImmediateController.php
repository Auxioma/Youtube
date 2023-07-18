<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VoyanceImmediateController extends AbstractController
{
    #[Route('/voyance-immediate', name: 'app_forfait')]
    public function index(): Response
    {
        return $this->render('voyance_immediate/index.html.twig');
    }
}