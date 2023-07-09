<?php

namespace App\Controller\User;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/user/forfait', name: 'user_forfait')]
    public function index(ProductRepository $product): Response
    {
        return $this->render('user/forfait/index.html.twig', [
            'products' => $product->findBy(['IsActive' => true])
        ]);
    }
}
