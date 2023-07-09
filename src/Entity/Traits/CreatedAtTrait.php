<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait CreatedAtTrait
{

    #[ORM\Column(type: 'datetime_immutable', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable  $CreatedAt;

    public function getCreatedAt(): \DateTimeImmutable 
    {
        return $this->CreatedAt;
    }

    #[ORM\PrePersist]
    public function setCreatedAt(): void
    {
        $this->CreatedAt = new \DateTimeImmutable();
    }

    /*
    public function setCreatedAt(\DateTimeImmutable $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }
    */
}