<?php

namespace App\DataFixtures;

use App\Entity\CategoryBlog;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class CategoryBlogFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $categoryBlog = new CategoryBlog();
        $categoryBlog->setTitre('Catégorie 1');
        $categoryBlog->setSlug('categorie-1');
        $categoryBlog->setIsVerified(true);
        $categoryBlog->setCreatedAt(new \DateTimeImmutable());
        $categoryBlog->setUpdatedAt(new \DateTimeImmutable());
        $this->addReference('categorie-1', $categoryBlog);
        $manager->persist($categoryBlog);

        $categoryBlog = new CategoryBlog();
        $categoryBlog->setTitre('Catégorie 2');
        $categoryBlog->setSlug('categorie-2');
        $categoryBlog->setIsVerified(true);
        $categoryBlog->setCreatedAt(new \DateTimeImmutable());
        $categoryBlog->setUpdatedAt(new \DateTimeImmutable());
        $this->addReference('categorie-2', $categoryBlog);
        $manager->persist($categoryBlog);

        $categoryBlog = new CategoryBlog();
        $categoryBlog->setTitre('Catégorie 3');
        $categoryBlog->setSlug('categorie-3');
        $categoryBlog->setIsVerified(true);
        $categoryBlog->setCreatedAt(new \DateTimeImmutable());
        $categoryBlog->setUpdatedAt(new \DateTimeImmutable());
        $this->addReference('categorie-3', $categoryBlog);
        $manager->persist($categoryBlog);

        $categoryBlog = new CategoryBlog();
        $categoryBlog->setTitre('Catégorie 4');
        $categoryBlog->setSlug('categorie-4');
        $categoryBlog->setIsVerified(true);
        $categoryBlog->setCreatedAt(new \DateTimeImmutable());
        $categoryBlog->setUpdatedAt(new \DateTimeImmutable());
        $this->addReference('categorie-4', $categoryBlog);
        $manager->persist($categoryBlog);

        $categoryBlog = new CategoryBlog();
        $categoryBlog->setTitre('Catégorie 5');
        $categoryBlog->setSlug('categorie-5');
        $categoryBlog->setIsVerified(true);
        $categoryBlog->setCreatedAt(new \DateTimeImmutable());
        $categoryBlog->setUpdatedAt(new \DateTimeImmutable());
        $this->addReference('categorie-5', $categoryBlog);
        $manager->persist($categoryBlog);


        $manager->flush();
    }
}
