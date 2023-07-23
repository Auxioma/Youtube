<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Repository\MessageRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Index;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
#[ORM\Table(indexes: [new Index(name: 'created_at_index', columns: ['created_at'])])]
#[ORM\HasLifecycleCallbacks]
class Message
{
    use CreatedAtTrait; 

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'text')]
    private ?string $content;

    #[ORM\ManyToOne(targetEntity: Profile::class, inversedBy: 'messages')]
    private ?Profile $profile;

    #[ORM\ManyToOne(targetEntity: Conversation::class, inversedBy: 'messages')]
    private ?Conversation $conversation;

    private $mine;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getConversation(): ?Conversation
    {
        return $this->conversation;
    }

    public function setConversation(?Conversation $conversation): self
    {
        $this->conversation = $conversation;

        return $this;
    }

    public function getMine()
    {
        return $this->mine;
    }

    public function setMine($mine): void
    {
        $this->mine = $mine;
    }

    public function getProfile(): ?Profile
    {
        return $this->profile;
    }

    public function setProfile(?Profile $profile): static
    {
        $this->profile = $profile;

        return $this;
    }
}
