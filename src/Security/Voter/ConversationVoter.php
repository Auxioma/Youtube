<?php

namespace App\Security\Voter;

use App\Entity\Conversation;
use App\Repository\ConversationRepository;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class ConversationVoter extends Voter
{
    public function __construct(
        private ConversationRepository $conversationRepository
    ) {}

    public const VIEW = 'view';

    protected function supports(string $attribute, mixed $subject): bool
    {
        // dd($subject, $attribute);

        return $attribute === self::VIEW && $subject instanceof Conversation;
    }

    protected function voteOnAttribute(string $attribute, mixed $subject, TokenInterface $token): bool
    {
        $result = $this->conversationRepository->checkIfUserisParticipant(
            $subject->getId(),
            $token->getUser()->getProfile()->getId()
        );
        
        return !!$result;
    }
}
