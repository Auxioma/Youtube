<?php

namespace App\Controller\User;

use App\Repository\TicketPaiementRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MesPaiementsController extends AbstractController
{
    #[Route('/user/paiements', name: 'app_mes_paiements')]
    public function index(TicketPaiementRepository $ticket): Response
    {


        return $this->render('user/mes_paiements/index.html.twig', [
            'tickets' => $ticket->findAll(['Customer' => $this->getUser()]),
        ]);
    }
}
