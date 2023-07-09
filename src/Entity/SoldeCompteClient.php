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
}
