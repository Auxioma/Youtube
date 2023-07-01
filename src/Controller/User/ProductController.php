<?php

namespace App\Controller\User;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    #[Route('/user/product', name: 'app_user_product')]
    public function index(): Response
    {
        return $this->render('user/product/index.html.twig', [
            'controller_name' => 'ProductController',
        ]);
    }
}
