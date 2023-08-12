<?php

namespace App\Controller\Admin;

use App\Entity\ModeDeConsultation;
use App\Form\ModeDeConsultationType;
use App\Repository\ModeDeConsultationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/adm1in/mode-de-consultation')]
class ModeDeConsultationController extends AbstractController
{
    #[Route('/', name: 'app_admin_mode_de_consultation_index', methods: ['GET'])]
    public function index(ModeDeConsultationRepository $modeDeConsultationRepository): Response
    {
        return $this->render('admin/mode_de_consultation/index.html.twig', [
            'mode_de_consultations' => $modeDeConsultationRepository->findAll(),
        ]);
    }


    #[Route('/{id}/edit', name: 'app_admin_mode_de_consultation_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ModeDeConsultation $modeDeConsultation, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ModeDeConsultationType::class, $modeDeConsultation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_mode_de_consultation_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/mode_de_consultation/edit.html.twig', [
            'mode_de_consultation' => $modeDeConsultation,
            'form' => $form,
        ]);
    }
}
