<?php

namespace App\Controller\Admin;

use App\Entity\TicketPaiement;
use App\Form\TicketPaiementType;
use App\Repository\TicketPaiementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/ticket')]
#[IsGranted('ROLE_ADMIN', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
class TicketPaiementCRUDController extends AbstractController
{
    #[Route('/', name: 'admin_ticket_paiement_index', methods: ['GET'])]
    public function index(TicketPaiementRepository $ticketPaiementRepository): Response
    {
        return $this->render('admin/ticket_paiement_crud/index.html.twig', [
            'ticket_paiements' => $ticketPaiementRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'admin_ticket_paiement_show', methods: ['GET'])]
    public function show(TicketPaiement $ticketPaiement): Response
    {
        return $this->render('admin/ticket_paiement_crud/show.html.twig', [
            'ticket_paiement' => $ticketPaiement,
        ]);
    }
}
