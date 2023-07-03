<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Name = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    private ?string $TVA = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    private ?string $PriceTTC = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 5, scale: 2)]
    private ?string $PriceHT = null;

    #[ORM\Column]
    private ?bool $IsActive = false;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getTVA(): ?string
    {
        return $this->TVA;
    }

    public function setTVA(string $TVA): static
    {
        $this->TVA = $TVA;

        return $this;
    }

    public function getPriceTTC(): ?string
    {
        return $this->PriceTTC;
    }

    public function setPriceTTC(string $PriceTTC): static
    {
        $this->PriceTTC = $PriceTTC;

        return $this;
    }

    public function getPriceHT(): ?string
    {
        return $this->PriceHT;
    }

    public function setPriceHT(string $PriceHT): static
    {
        $this->PriceHT = $PriceHT;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->IsActive;
    }

    public function setIsActive(bool $IsActive): static
    {
        $this->IsActive = $IsActive;

        return $this;
    }
}
