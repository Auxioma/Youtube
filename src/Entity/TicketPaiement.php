<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Repository\TicketPaiementRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TicketPaiementRepository::class)]
class TicketPaiement
{
    use CreatedAtTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $SecureKey = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 20, scale: 2)]
    private ?string $TotalPaidTTC = null;

    #[ORM\Column(length: 255)]
    private ?string $InvoiceNumber = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 20, scale: 2, nullable: true)]
    private ?string $Discount = null;

    #[ORM\Column(length: 255)]
    private ?string $NameProduct = null;

    #[ORM\ManyToOne(inversedBy: 'ticketPaiements')]
    private ?Profile $Customer = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSecureKey(): ?string
    {
        return $this->SecureKey;
    }

    public function setSecureKey(string $SecureKey): static
    {
        $this->SecureKey = $SecureKey;

        return $this;
    }

    public function getTotalPaidTTC(): ?string
    {
        return $this->TotalPaidTTC;
    }

    public function setTotalPaidTTC(string $TotalPaidTTC): static
    {
        $this->TotalPaidTTC = $TotalPaidTTC;

        return $this;
    }

    public function getInvoiceNumber(): ?string
    {
        return $this->InvoiceNumber;
    }

    public function setInvoiceNumber(string $InvoiceNumber): static
    {
        $this->InvoiceNumber = $InvoiceNumber;

        return $this;
    }

    public function getDiscount(): ?string
    {
        return $this->Discount;
    }

    public function setDiscount(?string $Discount): static
    {
        $this->Discount = $Discount;

        return $this;
    }

    public function getNameProduct(): ?string
    {
        return $this->NameProduct;
    }

    public function setNameProduct(string $NameProduct): static
    {
        $this->NameProduct = $NameProduct;

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
