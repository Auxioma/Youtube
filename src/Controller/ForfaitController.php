<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ForfaitController extends AbstractController
{
    #[Route('/forfait', name: 'app_forfait')]
    public function index(ProductRepository $product): Response
    {
        return $this->render('forfait/index.html.twig', [
            'products' => $product->findBy(['IsActive' => true])
        ]);
    }
}
