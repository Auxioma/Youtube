<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Repository\SoldeCompteClientRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SoldeCompteClientRepository::class)]
#[ORM\Table(name: 'solde_compte_client')]
#[ORM\HasLifecycleCallbacks]
class SoldeCompteClient
{
    use CreatedAtTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 20, scale: 2)]
    private ?string $PrixRestant = null;

    #[ORM\ManyToOne(inversedBy: 'soldeCompteClients')]
    private ?Profile $Customer = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $BonusByAdmin = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $TypeDeConsultation = null;

    #[ORM\OneToOne(mappedBy: 'Client', cascade: ['persist', 'remove'])]
    private ?Avis $avis = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrixRestant(): ?string
    {
        return $this->PrixRestant;
    }

    public function setPrixRestant(string $PrixRestant): static
    {
        $this->PrixRestant = $PrixRestant;

        return $this;
    }

    public function getCustomer(): ?Profile
    {
        return $this->Customer;
    }

    public function setCustomer(?Profile $Customer): static
    {
        $this->Customer = $Customer;

        return $this;
    }

    public function getBonusByAdmin(): ?string
    {
        return $this->BonusByAdmin;
    }

    public function setBonusByAdmin(?string $BonusByAdmin): static
    {
        $this->BonusByAdmin = $BonusByAdmin;

        return $this;
    }

    public function getTypeDeConsultation(): ?string
    {
        return $this->TypeDeConsultation;
    }

    public function setTypeDeConsultation(?string $TypeDeConsultation): static
    {
        $this->TypeDeConsultation = $TypeDeConsultation;

        return $this;
    }

    public function getAvis(): ?Avis
    {
        return $this->avis;
    }

    public function setAvis(Avis $avis): static
    {
        // set the owning side of the relation if necessary
        if ($avis->getClient() !== $this) {
            $avis->setClient($this);
        }

        $this->avis = $avis;

        return $this;
    }

}
