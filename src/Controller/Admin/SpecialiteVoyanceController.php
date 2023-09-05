<?php

namespace App\Controller\Admin;

use App\Entity\SpecialiteVoyance;
use Doctrine\ORM\EntityManagerInterface;
use App\Form\Admin\SpecialiteVoyanceType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\SpecialiteVoyanceRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/aadmin/specialite/voyance')]
class SpecialiteVoyanceController extends AbstractController
{
    #[Route('/', name: 'app_admin_specialite_voyance_index', methods: ['GET'])]
    public function index(SpecialiteVoyanceRepository $specialiteVoyanceRepository): Response
    {
        return $this->render('admin/specialite_voyance/index.html.twig', [
            'specialite_voyances' => $specialiteVoyanceRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_specialite_voyance_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $specialiteVoyance = new SpecialiteVoyance();
        $form = $this->createForm(SpecialiteVoyanceType::class, $specialiteVoyance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($specialiteVoyance);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_specialite_voyance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/specialite_voyance/new.html.twig', [
            'specialite_voyance' => $specialiteVoyance,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_specialite_voyance_show', methods: ['GET'])]
    public function show(SpecialiteVoyance $specialiteVoyance): Response
    {
        return $this->render('admin/specialite_voyance/show.html.twig', [
            'specialite_voyance' => $specialiteVoyance,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_specialite_voyance_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, SpecialiteVoyance $specialiteVoyance, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(SpecialiteVoyanceType::class, $specialiteVoyance);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_specialite_voyance_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/specialite_voyance/edit.html.twig', [
            'specialite_voyance' => $specialiteVoyance,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_specialite_voyance_delete', methods: ['POST'])]
    public function delete(Request $request, SpecialiteVoyance $specialiteVoyance, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$specialiteVoyance->getId(), $request->request->get('_token'))) {
            $entityManager->remove($specialiteVoyance);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_specialite_voyance_index', [], Response::HTTP_SEE_OTHER);
    }
}
