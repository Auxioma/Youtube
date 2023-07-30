<?php

namespace App\Controller\User;

use App\Repository\TicketPaiementRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MesPaiementsController extends AbstractController
{
    #[Route('/user/paiements', name: 'app_mes_paiements')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(TicketPaiementRepository $ticket): Response
    {
        return $this->render('user/mes_paiements/index.html.twig', [
            'tickets' => $ticket->findAll(['Customer' => $this->getUser()]),
        ]);
    }
}
