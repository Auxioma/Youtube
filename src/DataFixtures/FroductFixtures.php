<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class FroductFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // 4 forfait de voyance
        $forfait = new Product();
        $forfait->setName('Forfait 10 minutes');
        $forfait->setTVA(20.00);
        $forfait->setPriceTTC(20.00);
        $forfait->setPriceHT(16.67);
        $forfait->setIsActive(true);
        $manager->persist($forfait);

        $forfait2 = new Product();
        $forfait2->setName('Forfait 20 minutes');
        $forfait2->setTVA(20.00);
        $forfait2->setPriceTTC(40.00);
        $forfait2->setPriceHT(33.33);
        $forfait2->setIsActive(true);
        $manager->persist($forfait2);

        $forfait3 = new Product();
        $forfait3->setName('Forfait 30 minutes');
        $forfait3->setTVA(20.00);
        $forfait3->setPriceTTC(60.00);
        $forfait3->setPriceHT(50.00);
        $forfait3->setIsActive(true);
        $manager->persist($forfait3);

        $forfait4 = new Product();
        $forfait4->setName('Forfait 60 minutes');
        $forfait4->setTVA(20.00);
        $forfait4->setPriceTTC(120.00);
        $forfait4->setPriceHT(100.00);
        $forfait4->setIsActive(true);
        $manager->persist($forfait4);
        


        $manager->flush();
    }
}
