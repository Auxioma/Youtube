<?php

namespace App\Controller\Admin;

use App\Entity\Profile;
use App\Form\Profile1Type;
use App\Repository\ProfileRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/profile')]
class ProfileController extends AbstractController
{
    #[Route('/', name: 'app_admin_profile_index', methods: ['GET'])]
    public function index(ProfileRepository $profileRepository): Response
    {
        return $this->render('admin/profile/index.html.twig', [
            'profiles' => $profileRepository->findAll(),
        ]);
    }

    #[Route('/{id}', name: 'app_admin_profile_show', methods: ['GET'])]
    public function show(Profile $profile): Response
    {
        return $this->render('admin/profile/show.html.twig', [
            'profile' => $profile,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_profile_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Profile $profile, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(Profile1Type::class, $profile);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_user_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/profile/edit.html.twig', [
            'profile' => $profile,
            'form' => $form,
        ]);
    }

}
