<?php

namespace App\Controller\MercureChat;

use App\Entity\Conversation;
use App\Entity\Participant;
use App\Repository\ConversationRepository;
use App\Repository\ProfileRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\WebLink\Link;

#[Route('/conversations', name: 'conversations.')]
class ConversationController extends AbstractController
{
    private ProfileRepository $profileRepository;
    private EntityManagerInterface $entityManager;
    private ConversationRepository $conversationRepository;

    public function __construct(
        ProfileRepository $profileRepository,
        EntityManagerInterface $entityManager,
        ConversationRepository $conversationRepository
    ) {
        $this->profileRepository = $profileRepository;
        $this->entityManager = $entityManager;
        $this->conversationRepository = $conversationRepository;
    }

    #[Route('/', name: 'newConversations', methods: ['POST'])]
    public function index(Request $request): JsonResponse
    {
        $otherUser = $request->get('otherUser', 0);
        $otherUser = $this->profileRepository->find($otherUser );

        if (is_null($otherUser)) {
            throw new \Exception("The user was not found");
        }

        // cannot create a conversation with myself
        if ($otherUser->getId() === $this->getUser()->getProfile()->getId()) {
            throw new \Exception("That's deep but you cannot create a conversation with yourself");
        }

        // Check if conversation already exists
        $conversation = $this->conversationRepository->findConversationByParticipants(
            $otherUser->getId(),
            $this->getUser()->getProfile()->getId()
        );

        if (count($conversation)) {
            throw new \Exception("The conversation already exists");
        }

        // I create a new conveersation
        $conversation = new Conversation();

        $participant = new Participant();
        $participant->setProfile($this->getUser()->getProfile());
        $participant->setConversation($conversation);


        $otherParticipant = new Participant();
        $otherParticipant->setProfile($otherUser);
        $otherParticipant->setConversation($conversation);

        $this->entityManager->beginTransaction();
        try {
            $this->entityManager->persist($conversation);
            $this->entityManager->persist($participant);
            $this->entityManager->persist($otherParticipant);

            $this->entityManager->flush();
            $this->entityManager->commit();

        } catch (\Exception $e) {
            $this->entityManager->rollback();
            throw $e;
        }

        return $this->json([
            'id' => $conversation->getId()
        ], Response::HTTP_CREATED);
    }

    #[Route('/', name: 'getConversations', methods: ['GET'])]
    public function getConvs(Request $request): JsonResponse
    {
        $conversations = $this->conversationRepository->findConversationsByUser($this->getUser()->getProfile()->getId());

        $hubUrl = $this->getParameter('mercure.default_hub');
        $this->addLink($request, new Link('mercure', $hubUrl));

        return $this->json($conversations);
    }

}
 