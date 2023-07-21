<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Entity\Traits\UpdatedAtTrait;
use App\Repository\ArticleBlogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: ArticleBlogRepository::class)]
#[Vich\Uploadable]
class ArticleBlog
{
    use CreatedAtTrait;
    use UpdatedAtTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $Article = null;

    #[ORM\Column(length: 255)]
    private ?string $Slug = null;

    #[ORM\ManyToOne(inversedBy: 'articleBlogs')]
    private ?CategoryBlog $Categorie = null;

    #[ORM\Column(length: 255)]
    private ?string $Titre = null;

    #[ORM\Column]
    private ?bool $IsActive = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $LongDescription = null;

    #[Vich\UploadableField(mapping: 'slider', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;
    
    #[ORM\Column(nullable: true)]
    private ?string $imageName = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getArticle(): ?string 
    {
        return $this->Article;
    }

    public function setArticle(string $Article): static
    {
        $this->Article = $Article;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->Slug;
    }

    public function setSlug(string $Slug): static
    {
        $this->Slug = $Slug;

        return $this;
    }

    public function getCategorie(): ?CategoryBlog
    {
        return $this->Categorie;
    }

    public function setCategorie(?CategoryBlog $Categorie): static
    {
        $this->Categorie = $Categorie;

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->Titre;
    }

    public function setTitre(string $Titre): static
    {
        $this->Titre = $Titre;

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

    public function getLongDescription(): ?string
    {
        return $this->LongDescription;
    }

    public function setLongDescription(string $LongDescription): static
    {
        $this->LongDescription = $LongDescription;

        return $this;
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile|null $imageFile
     */
    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->UpdatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }
}
