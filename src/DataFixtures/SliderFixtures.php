<?php

// src/DataFixtures/AppFixtures.php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Slider;

class SliderFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $sliderData = [
            [
                'title' => 'Voyance en ligne',
                'description' => 'Voyance en ligne',
                'slug' => 'voyance-en-ligne',
                'nameSlug' => 'voyance-en-ligne',
                'isActive' => true,
                'imageName' => 'slider-1.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
            ],
            [
                'title' => 'Voyance par téléphone',
                'description' => 'Voyance par téléphone',
                'slug' => 'voyance-par-telephone',
                'nameSlug' => 'voyance-par-telephone',
                'isActive' => true,
                'imageName' => 'slider-2.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
            ],
            [
                'title' => 'Voyance par tchat',
                'description' => 'Voyance par tchat',
                'slug' => 'voyance-par-tchat',
                'nameSlug' => 'voyance-par-tchat',
                'isActive' => true,
                'imageName' => 'slider-3.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
            ],
        ];

        foreach ($sliderData as $data) {
            $slider = new Slider();
            $slider->setTitle($data['title']);
            $slider->setDescription($data['description']);
            $slider->setSlug($data['slug']);
            $slider->setNameSlug($data['nameSlug']);
            $slider->setIsActive($data['isActive']);
            $slider->setImageName($data['imageName']);
            $slider->setCreatedAt($data['createdAt']);
            $slider->setUpdatedAt($data['updatedAt']);

            $manager->persist($slider);
        }

        $manager->flush();
    }
}

