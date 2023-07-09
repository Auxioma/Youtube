<?php

namespace App\Controller\Admin;

use App\Entity\ConsultationEmail;
use App\Form\ConsultationEmailType;
use App\Repository\ConsultationEmailRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/consultation/email')]
class ConsultationEmailController extends AbstractController
{
    #[Route('/', name: 'app_admin_consultation_email_index', methods: ['GET'])]
    public function index(ConsultationEmailRepository $consultationEmailRepository): Response
    {
        return $this->render('admin/consultation_email/index.html.twig', [
            'consultation_emails' => $consultationEmailRepository->findAll(),
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_consultation_email_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ConsultationEmailRepository $consultationEmailRepository, $id): Response
    {
        $consultationEmail = new ConsultationEmail();
        $form = $this->createForm(ConsultationEmailType::class, $consultationEmail);
        $form->handleRequest($request);

        $consultation = $consultationEmailRepository->find($id);

        if ($form->isSubmitted() && $form->isValid()) {

            $consultationEmail->setMessage($form->get('Message')->getData());
            $consultationEmail->setUser($this->getUser()->getProfile());
            $consultationEmail->setReponse($consultation);
            $consultationEmailRepository->save($consultationEmail, true);

            return $this->redirectToRoute('app_admin_consultation_email_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/consultation_email/edit.html.twig', [
            'consultationemail' => $consultation,
            'form' => $form->createView(),
        ]);
    }
}
