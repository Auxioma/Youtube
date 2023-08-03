<?php

namespace App\Controller\User;

use App\Entity\Profile;
use App\Form\ProfileType;
use App\Entity\Participant;
use App\Entity\Conversation;
use App\Repository\ProfileRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfileController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(
        EntityManagerInterface $entityManager,
    ) {
        $this->entityManager = $entityManager;
    }

    #[Route('/user/profile/new', name: 'user_profile_new')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function index(Request $request, ProfileRepository $profileRepository): Response
    {
        // je vais fair une redirection si l'utilisateur a déjà un profil
        if ($this->getUser()->getProfile()) {
            return $this->redirectToRoute('user_profile');
        }

        $profile = new Profile();
        $form = $this->createForm(ProfileType::class, $profile);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // on récupère le profil de l'utilisateur
            $profile->setUser($this->getUser());

            // ici, je vais créer un nouveau participant pour le chat
            /**
             * L'ID 1 correspond au ROLE_ADMIN
             */
            $otherUser = $profileRepository->findOneBy(['id' => 1]);

            $conversation = new Conversation();

            $participant = new Participant();
            $participant->setProfile($profile);
            $participant->setConversation($conversation);

            $otherParticipant = new Participant();
            $otherParticipant->setProfile($otherUser);
            $otherParticipant->setConversation($conversation);

            $this->entityManager->beginTransaction();
            try {
                $this->entityManager->persist($profile);
                $this->entityManager->persist($conversation);
                $this->entityManager->persist($participant);
                $this->entityManager->persist($otherParticipant);
    
                $this->entityManager->flush();
                $this->entityManager->commit();
    
            } catch (\Exception $e) {
                $this->entityManager->rollback();
                throw $e;
            }

            // message flash et redirection
            $this->addFlash('success', 'Votre profil a bien été créé.');
            return $this->redirectToRoute('user_profile');
        }

        return $this->render('user/profile/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/user/profile', name: 'user_profile')]
    #[IsGranted('ROLE_USER', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
    public function update(Request $request, ProfileRepository $profileRepository, EntityManagerInterface $em): Response
    {
        // je vais fair une redirection si l'utilisateur n'a pas de profil
        if (!$this->getUser()->getProfile()) {
            return $this->redirectToRoute('user_profile_new');
        }
        
        $profile = new Profile();
        $form = $this->createForm(ProfileType::class, $profile);

        $profile = $profileRepository->findOneBy(['id' => $this->getUser()->getProfile()]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $profile->setUser($this->getUser());
            $profile->setPseudo($form->get('Pseudo')->getData());
            $profile->setNom($form->get('Nom')->getData());
            $profile->setDateDeNaissance($form->get('DateDeNaissance')->getData());
            $profile->setNumeroTelephone($form->get('NumeroTelephone')->getData());
            $profile->setAdresse($form->get('Adresse')->getData());
            $profile->setCodePostal($form->get('CodePostal')->getData());
            $profile->setVille($form->get('Ville')->getData());
            $profile->setPays($form->get('Pays')->getData());
            $profile->setOptIn($form->get('OptIn')->getData());
            $em->flush();
            
            // message flash et redirection
            $this->addFlash('success', 'Votre profil a bien été mis à jour.');
            return $this->redirectToRoute('user_profile');
        }

        return $this->render('user/profile/show.html.twig', [
            'profile' => $profile,
            'form' => $form->createView(),
        ]);
    }
}
