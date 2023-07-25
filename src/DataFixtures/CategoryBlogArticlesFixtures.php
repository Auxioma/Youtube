<?php

namespace App\DataFixtures;

use App\Entity\ArticleBlog;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CategoryBlogArticlesFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // je vais mettre 10 article par catégorie

        for($i = 1; $i <= 50; $i++) {
            $article = new ArticleBlog();
            $article->setArticle('Article '.$i);
            $article->setSlug('article-'.$i);
            $article->setTitre('Titre '.$i);
            $article->setIsActive(true);
            $article->setLongDescription('Longue description '.$i);
            $article->setImageName('image.jpg');
            $article->setCreatedAt(new \DateTimeImmutable());
            $article->setUpdatedAt(new \DateTimeImmutable());
            $article->setCategorie($this->getReference('categorie-'. rand(1, 5)));
            $manager->persist($article);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CategoryBlogFixtures::class,
        ];
    }
}
