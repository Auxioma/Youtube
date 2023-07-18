<?php

namespace App\Entity;

use App\Repository\ArticleBlogRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ArticleBlogRepository::class)]
class ArticleBlog
{
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
}
