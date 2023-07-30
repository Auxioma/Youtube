<?php

namespace App\Controller\User;

use App\Repository\ProductRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProductController extends AbstractController
{
    #[Route('/user/forfait', name: 'user_forfait')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(ProductRepository $product): Response
    {
        return $this->render('user/forfait/index.html.twig', [
            'products' => $product->findBy(['IsActive' => true])
        ]);
    }
} 
