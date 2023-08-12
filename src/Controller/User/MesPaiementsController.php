<?php

namespace App\Controller\User;

use App\Services\PdfServices;
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
            'tickets' => $ticket->findBy(['Customer' => $this->getUser()->getProfile()]),
        ]);
    }

    #[Route('/user/paiements/pdf{id}', name: 'pdf_paiement')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function pdf(PdfServices $PdfServices, TicketPaiementRepository $ticket, $id)
    {
        $findPdf = $ticket->findOneBy(['id' => $id, 'Customer' => $this->getUser()->getProfile()]);
        $html = $this->render('user/mes_paiements/pdf.html.twig', ['facture' => $findPdf ]);
        $PdfServices->showPdfFile($html);

    }
}
