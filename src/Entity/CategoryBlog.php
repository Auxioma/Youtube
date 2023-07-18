<?php

namespace App\Entity;

use App\Entity\Traits\CreatedAtTrait;
use App\Entity\Traits\UpdatedAtTrait;
use App\Repository\CategoryBlogRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryBlogRepository::class)]
class CategoryBlog
{
    use CreatedAtTrait;
    use UpdatedAtTrait;
    
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $Titre = null;

    #[ORM\Column(length: 255)]
    private ?string $Slug = null;

    #[ORM\OneToMany(mappedBy: 'Categorie', targetEntity: ArticleBlog::class)]
    private Collection $articleBlogs;

    #[ORM\Column]
    private ?bool $IsVerified = null;

    public function __construct()
    {
        $this->articleBlogs = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getSlug(): ?string
    {
        return $this->Slug;
    }

    public function setSlug(string $Slug): static
    {
        $this->Slug = $Slug;

        return $this;
    }

    /**
     * @return Collection<int, ArticleBlog>
     */
    public function getArticleBlogs(): Collection
    {
        return $this->articleBlogs;
    }

    public function addArticleBlog(ArticleBlog $articleBlog): static
    {
        if (!$this->articleBlogs->contains($articleBlog)) {
            $this->articleBlogs->add($articleBlog);
            $articleBlog->setCategorie($this);
        }

        return $this;
    }

    public function removeArticleBlog(ArticleBlog $articleBlog): static
    {
        if ($this->articleBlogs->removeElement($articleBlog)) {
            // set the owning side to null (unless already changed)
            if ($articleBlog->getCategorie() === $this) {
                $articleBlog->setCategorie(null);
            }
        }

        return $this;
    }

    public function isIsVerified(): ?bool
    {
        return $this->IsVerified;
    }

    public function setIsVerified(bool $IsVerified): static
    {
        $this->IsVerified = $IsVerified;

        return $this;
    }
}
