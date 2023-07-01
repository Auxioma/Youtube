<?php

namespace App\Entity\Traits;

use Doctrine\ORM\Mapping as ORM;

trait UpdatedAtTrait
{

    #[ORM\Column(type: 'datetime_immutable', options: ['default' => 'CURRENT_TIMESTAMP'])]
    private ?\DateTimeImmutable  $UpdatedAt;

    public function getUpdatedAt(): \DateTimeImmutable 
    {
        return $this->UpdatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable  $UpdatedAt): self
    {
        $this->UpdatedAt = $UpdatedAt;

        return $this;
    }
}