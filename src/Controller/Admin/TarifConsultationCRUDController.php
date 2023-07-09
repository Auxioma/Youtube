<?php

namespace App\Controller\Admin;

use App\Entity\TarifConsultation;
use App\Form\TarifConsultationType;
use App\Repository\TarifConsultationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/tarif')]
class TarifConsultationCRUDController extends AbstractController
{
    #[Route('/', name: 'app_admin_tarif_consultation_index', methods: ['GET'])]
    public function index(TarifConsultationRepository $tarifConsultationRepository): Response
    {
        return $this->render('admin/tarif_consultation_crud/index.html.twig', [
            'tarif_consultations' => $tarifConsultationRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_tarif_consultation_new', methods: ['GET', 'POST'])]
    public function new(Request $request, TarifConsultationRepository $tarifConsultationRepository): Response
    {
        $tarifConsultation = new TarifConsultation();
        $form = $this->createForm(TarifConsultationType::class, $tarifConsultation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $tarifConsultationRepository->save($tarifConsultation, true);

            return $this->redirectToRoute('app_admin_tarif_consultation_c_r_u_d_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/tarif_consultation_crud/new.html.twig', [
            'tarif_consultation' => $tarifConsultation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_tarif_consultation_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, TarifConsultation $tarifConsultation, TarifConsultationRepository $tarifConsultationRepository): Response
    {
        $form = $this->createForm(TarifConsultationType::class, $tarifConsultation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $tarifConsultationRepository->save($tarifConsultation, true);

            return $this->redirectToRoute('app_admin_tarif_consultation_c_r_u_d_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('admin/tarif_consultation_crud/edit.html.twig', [
            'tarif_consultation' => $tarifConsultation,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_tarif_consultation_delete', methods: ['POST'])]
    public function delete(Request $request, TarifConsultation $tarifConsultation, TarifConsultationRepository $tarifConsultationRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$tarifConsultation->getId(), $request->request->get('_token'))) {
            $tarifConsultationRepository->remove($tarifConsultation, true);
        }

        return $this->redirectToRoute('app_admin_tarif_consultation_c_r_u_d_index', [], Response::HTTP_SEE_OTHER);
    }
}
