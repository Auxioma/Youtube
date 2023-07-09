<?php

namespace App\Entity;

use App\Repository\ProfileRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProfileRepository::class)]
class Profile
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Pseudo = null;

    #[ORM\Column(length: 255)]
    private ?string $Nom = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $DateDeNaissance = null;

    #[ORM\Column(length: 11)]
    private ?string $NumeroTelephone = null;

    #[ORM\Column(length: 255)]
    private ?string $Adresse = null;

    #[ORM\Column(length: 255)]
    private ?string $CodePostal = null;

    #[ORM\Column(length: 255)]
    private ?string $Ville = null;

    #[ORM\Column(length: 255)]
    private ?string $Pays = null;

    #[ORM\Column]
    private ?bool $OptIn = null;

    #[ORM\OneToOne(inversedBy: 'profile', cascade: ['persist', 'remove'])]
    private ?User $User = null;

    #[ORM\OneToMany(mappedBy: 'Customer', targetEntity: TicketPaiement::class)]
    private Collection $ticketPaiements;

    #[ORM\OneToMany(mappedBy: 'Customer', targetEntity: SoldeCompteClient::class)]
    private Collection $soldeCompteClients;

    #[ORM\OneToMany(mappedBy: 'User', targetEntity: ConsultationEmail::class)]
    private Collection $consultationEmails;

    public function __construct()
    {
        $this->ticketPaiements = new ArrayCollection();
        $this->soldeCompteClients = new ArrayCollection();
        $this->consultationEmails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPseudo(): ?string
    {
        return $this->Pseudo;
    }

    public function setPseudo(string $Pseudo): static
    {
        $this->Pseudo = $Pseudo;

        return $this;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): static
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getDateDeNaissance(): ?\DateTimeInterface
    {
        return $this->DateDeNaissance;
    }

    public function setDateDeNaissance(\DateTimeInterface $DateDeNaissance): static
    {
        $this->DateDeNaissance = $DateDeNaissance;

        return $this;
    }

    public function getNumeroTelephone(): ?string
    {
        return $this->NumeroTelephone;
    }

    public function setNumeroTelephone(string $NumeroTelephone): static
    {
        $this->NumeroTelephone = $NumeroTelephone;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->Adresse;
    }

    public function setAdresse(string $Adresse): static
    {
        $this->Adresse = $Adresse;

        return $this;
    }

    public function getCodePostal(): ?string
    {
        return $this->CodePostal;
    }

    public function setCodePostal(string $CodePostal): static
    {
        $this->CodePostal = $CodePostal;

        return $this;
    }

    public function getVille(): ?string
    {
        return $this->Ville;
    }

    public function setVille(string $Ville): static
    {
        $this->Ville = $Ville;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->Pays;
    }

    public function setPays(string $Pays): static
    {
        $this->Pays = $Pays;

        return $this;
    }

    public function isOptIn(): ?bool
    {
        return $this->OptIn;
    }

    public function setOptIn(bool $OptIn): static
    {
        $this->OptIn = $OptIn;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->User;
    }

    public function setUser(?User $User): static
    {
        $this->User = $User;

        return $this;
    }

    /**
     * @return Collection<int, TicketPaiement>
     */
    public function getTicketPaiements(): Collection
    {
        return $this->ticketPaiements;
    }

    public function addTicketPaiement(TicketPaiement $ticketPaiement): static
    {
        if (!$this->ticketPaiements->contains($ticketPaiement)) {
            $this->ticketPaiements->add($ticketPaiement);
            $ticketPaiement->setCustomer($this);
        }

        return $this;
    }

    public function removeTicketPaiement(TicketPaiement $ticketPaiement): static
    {
        if ($this->ticketPaiements->removeElement($ticketPaiement)) {
            // set the owning side to null (unless already changed)
            if ($ticketPaiement->getCustomer() === $this) {
                $ticketPaiement->setCustomer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, SoldeCompteClient>
     */
    public function getSoldeCompteClients(): Collection
    {
        return $this->soldeCompteClients;
    }

    public function addSoldeCompteClient(SoldeCompteClient $soldeCompteClient): static
    {
        if (!$this->soldeCompteClients->contains($soldeCompteClient)) {
            $this->soldeCompteClients->add($soldeCompteClient);
            $soldeCompteClient->setCustomer($this);
        }

        return $this;
    }

    public function removeSoldeCompteClient(SoldeCompteClient $soldeCompteClient): static
    {
        if ($this->soldeCompteClients->removeElement($soldeCompteClient)) {
            // set the owning side to null (unless already changed)
            if ($soldeCompteClient->getCustomer() === $this) {
                $soldeCompteClient->setCustomer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ConsultationEmail>
     */
    public function getConsultationEmails(): Collection
    {
        return $this->consultationEmails;
    }

    public function addConsultationEmail(ConsultationEmail $consultationEmail): static
    {
        if (!$this->consultationEmails->contains($consultationEmail)) {
            $this->consultationEmails->add($consultationEmail);
            $consultationEmail->setUser($this);
        }

        return $this;
    }

    public function removeConsultationEmail(ConsultationEmail $consultationEmail): static
    {
        if ($this->consultationEmails->removeElement($consultationEmail)) {
            // set the owning side to null (unless already changed)
            if ($consultationEmail->getUser() === $this) {
                $consultationEmail->setUser(null);
            }
        }

        return $this;
    }
}
