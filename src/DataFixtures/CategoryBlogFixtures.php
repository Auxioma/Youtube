<?php

// src/DataFixtures/CategoryBlogFixtures.php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\CategoryBlog;

class CategoryBlogFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $category = new CategoryBlog();
        $category->setTitre('Histoire du Tarot');
        $category->setSlug('histoire-du-tarot');
        $category->setIsVerified(true);
        $category->setCreatedAt(new \DateTimeImmutable());
        $category->setUpdatedAt(new \DateTimeImmutable());

        $this->addReference('category-1', $category);

        $manager->persist($category);
        $manager->flush();
    }
}