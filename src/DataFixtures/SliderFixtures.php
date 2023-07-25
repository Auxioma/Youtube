<?php

namespace App\DataFixtures;

use App\Entity\Slider;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class SliderFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        /*
         * 2 slider pour un site de voyance en  ligne
         */
        $slider = new Slider();
        $slider->setTitle('Voyance en ligne');
        $slider->setDescription('Voyance en ligne');
        $slider->setSlug('voyance-en-ligne');
        $slider->setNameSlug('voyance-en-ligne');
        $slider->setIsActive(true);
        $slider->setImageName('hero_bg_3_2.jpg');
        $slider->setCreatedAt(new \DateTimeImmutable());
        $slider->setUpdatedAt(new \DateTimeImmutable());
        $manager->persist($slider);

        $slider2 = new Slider();
        $slider2->setTitle('Voyance par téléphone');
        $slider2->setDescription('Voyance par téléphone');
        $slider2->setSlug('voyance-par-telephone');
        $slider2->setNameSlug('voyance-par-telephone');
        $slider2->setIsActive(true);
        $slider2->setImageName('hero_bg_3_2.jpg');
        $slider2->setCreatedAt(new \DateTimeImmutable());
        $slider2->setUpdatedAt(new \DateTimeImmutable());
        $manager->persist($slider2);

        $slider3 = new Slider();
        $slider3->setTitle('Voyance par tchat');
        $slider3->setDescription('Voyance par tchat');
        $slider3->setSlug('voyance-par-tchat');
        $slider3->setNameSlug('voyance-par-tchat');
        $slider3->setIsActive(true);
        $slider3->setImageName('hero_bg_3_2.jpg');
        $slider3->setCreatedAt(new \DateTimeImmutable());
        $slider3->setUpdatedAt(new \DateTimeImmutable());
        $manager->persist($slider3);


        $manager->flush();
    }
}
