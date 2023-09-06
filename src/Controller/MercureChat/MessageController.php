<?php

namespace App\Controller\MercureChat;

use App\Entity\Message;
use App\Entity\Conversation;
use App\Repository\MessageRepository;
use App\Repository\ProfileRepository;
use Symfony\Component\Mercure\Update;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ParticipantRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Mercure\PublisherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/messages', name: 'messages.')]
class MessageController extends AbstractController
{

    const ATTRIBUTES_TO_SERIALIZE = ['id', 'content', 'CreatedAt', 'mine'];

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var MessageRepository
     */
    private $messageRepository;
    /**
     * @var profileRepository
     */
    private $profileRepository;
    /**
     * @var ParticipantRepository
     */
    private $participantRepository;
    /**
     * @var PublisherInterface
     */
    private $publisher;

    public function __construct(EntityManagerInterface $entityManager,
                                MessageRepository $messageRepository,
                                ProfileRepository $profileRepository,
                                ParticipantRepository $participantRepository,
                                PublisherInterface $publisher)
    {
        $this->entityManager = $entityManager;
        $this->messageRepository = $messageRepository;
        $this->profileRepository = $profileRepository;
        $this->participantRepository = $participantRepository;
        $this->publisher = $publisher;
    }


    /**
     * @param Conversation $conversation
     * @return JsonResponse
     */
    #[Route('/{id}', name: 'index', methods: ['get'])]
    public function index(Conversation $conversation)
    {
        // can i view the conversation

        $this->denyAccessUnlessGranted('view', $conversation);

        $messages = $this->messageRepository->findMessageByConversationId(
            $conversation->getId()
        );

        /**
         * @var $message Message
         */
        array_map(function ($message) {
            $message->setMine(
                $message->getProfile()->getId() === $this->getUser()->getProfile()->getId() ? true : false
            );
        }, $messages);


        return $this->json($messages, Response::HTTP_OK, [], [
            'attributes' => self::ATTRIBUTES_TO_SERIALIZE
        ]);
    }

    /**
     * @param Request $request
     * @param Conversation $conversation
     * @param SerializerInterface $serializer
     * @return JsonResponse
     * @throws \Doctrine\DBAL\Exception
     */
    #[Route('/{id}', name: 'newMessage', methods: ['post'])]
    public function newMessage(Request $request, Conversation $conversation, SerializerInterface $serializer)
    {
     
        // $user = $this->profileRepository->findoneBy(['id' => 1]);

        $user =  $this->getUser()->getProfile();

        $recipient = $this->participantRepository->findParticipantByConverstionIdAndUserId(
            $conversation->getId(),
            $user->getId()
        );

        $content = $request->get('content', null);

        $message = new Message();
        $message->setContent($content);
        
        // $message->setProfile($this->profileRepository->findoneBy(['id' => 2])); // Cette ligne est pour faire mes test avec postman
        $message->setProfile($user);

        $conversation->addMessage($message);
        $conversation->setLastMessage($message);

        $this->entityManager->getConnection()->beginTransaction();
        try {
            $this->entityManager->persist($message);
            $this->entityManager->persist($conversation);
            $this->entityManager->flush();
            $this->entityManager->commit();
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            throw $e;
        }

        $message->setMine(false);
        $messageSerialized = $serializer->serialize($message, 'json', [
            'attributes' => ['id', 'content', 'CreatedAt', 'mine', 'conversation' => ['id']]
        ]);
        

        $update = new Update(
            [
                sprintf("/conversations/%s", $conversation->getId()),
                sprintf("/conversations/%s", $recipient->getProfile()->getPseudo()),
            ],

            $messageSerialized, 
            /*
            [
                sprintf("/%s", $recipient->getProfile()->getPseudo())
            ]
            */
        );
        
        $this->publisher->__invoke($update);
     
        $message->setMine(true);

        

        return $this->json($message, Response::HTTP_CREATED, [], [
            'attributes' => self::ATTRIBUTES_TO_SERIALIZE
        ]);
    }
}

