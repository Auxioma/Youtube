<?php

namespace App\Controller\MailShimp;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MailshimpController extends AbstractController
{
    #[Route('/mailshimp', name: 'app_aboutus')]
    public function index() : Response
    {

        // je vais utilisé l'API de mailshimp stocker mes Mails des utilisateurs
        $api_key = '2c20e206350f0b481231b0ce1dde11c0-us11';
        $dc = 'us11';


        dd(
            'je vais utilisé l\'API de mailshimp stocker mes Mails des utilisateurs'
        );



        return $this->render('mailshimp/index.html.twig');
    }
}

    