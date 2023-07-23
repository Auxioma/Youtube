<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Repository\ConsultationEmailRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConsultationEmailRepository::class)]
#[ORM\Table(name: 'consultation_email')]
#[ORM\HasLifecycleCallbacks]
class ConsultationEmail
{
    use CreatedAtTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue] 
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Message = null;

    #[ORM\ManyToOne(inversedBy: 'consultationEmails')]
    private ?Profile $User = null;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'consultationEmails')]
    private ?self $Reponse = null;

    #[ORM\OneToMany(mappedBy: 'Reponse', targetEntity: self::class)]
    private Collection $consultationEmails;

    public function __construct()
    {
        $this->consultationEmails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->Message;
    }

    public function setMessage(string $Message): static
    {
        $this->Message = $Message;

        return $this;
    }

    public function getUser(): ?Profile
    {
        return $this->User;
    }

    public function setUser(?Profile $User): static
    {
        $this->User = $User;

        return $this;
    }

    public function getReponse(): ?self
    {
        return $this->Reponse;
    }

    public function setReponse(?self $Reponse): static
    {
        $this->Reponse = $Reponse;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getConsultationEmails(): Collection
    {
        return $this->consultationEmails;
    }

    public function addConsultationEmail(self $consultationEmail): static
    {
        if (!$this->consultationEmails->contains($consultationEmail)) {
            $this->consultationEmails->add($consultationEmail);
            $consultationEmail->setReponse($this);
        }

        return $this;
    }

    public function removeConsultationEmail(self $consultationEmail): static
    {
        if ($this->consultationEmails->removeElement($consultationEmail)) {
            // set the owning side to null (unless already changed)
            if ($consultationEmail->getReponse() === $this) {
                $consultationEmail->setReponse(null);
            }
        }

        return $this;
    }
}
