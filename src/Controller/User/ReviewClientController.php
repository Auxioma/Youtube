<?php

namespace App\Controller\User;

use App\Entity\Avis;
use App\Form\ReviewType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\SoldeCompteClientRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReviewClientController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private SoldeCompteClientRepository $avis;

    public function __construct(
        EntityManagerInterface $entityManager,
        SoldeCompteClientRepository $avis
    ) {
        $this->entityManager = $entityManager;
        $this->avis = $avis;
    }
    
    #[Route('/usedr/review', name: 'app_user_review_client')]
    public function index(SoldeCompteClientRepository $avis): Response
    {
        $user = $this->getUser()->getProfile();
        // $user = '33';

        return $this->render('user/review_client/index.html.twig', [
            'reviews' => $this->avis->findBy(['Customer' => $user, 'TypeDeConsultation' => ['Tchat', 'Email', 'Telephone']])

        ]);
    }

    #[Route('/usedr/review/{id}', name: 'user_review')]
    public function review(Request $request, $id): Response
    {
        /**
         * On verifira que le User et l'ID de la consultation sont bien lié
         */
        $verif = $this->avis->findOneBy(['Customer' => $this->getUser()->getProfile(), 'id' => $id]);
        if (!$verif) {
            return $this->redirectToRoute('app_user_review_client');
        }


        $avis = new Avis();
        $form = $this->createForm(ReviewType::class, $avis);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $avis->setClient($verif);
            $this->entityManager->persist($avis);
            $this->entityManager->flush();

            return $this->redirectToRoute('app_user_review_client');
        }

        return $this->render('user/review_client/new.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
