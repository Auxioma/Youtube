<?php

namespace App\DataFixtures;

use App\Entity\TarifConsultation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class TarifConsultationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // 3 tatifs voyance par Email
        // 1 par telephone
        // 1 par tchat

        $tarif = new TarifConsultation();
        $tarif->setName('Voyance par Email');
        $tarif->setDescription('Voyance par Email');
        $tarif->setModeDeConsultation('Email');
        $tarif->setPrice('10');
        $tarif->setIsActive(true);
        $tarif->setSlug('voyance-par-email');
        $manager->persist($tarif);

        $tarif2 = new TarifConsultation();
        $tarif2->setName('Voyance par Telephone');
        $tarif2->setDescription('Voyance par Telephone');
        $tarif2->setModeDeConsultation('Telephone');
        $tarif2->setPrice('20');
        $tarif2->setIsActive(true);
        $tarif2->setSlug('voyance-par-telephone');
        $manager->persist($tarif2);

        $tarif3 = new TarifConsultation();
        $tarif3->setName('Voyance par Tchat');
        $tarif3->setDescription('Voyance par Tchat');
        $tarif3->setModeDeConsultation('Tchat');
        $tarif3->setPrice('30');
        $tarif3->setIsActive(true);
        $tarif3->setSlug('voyance-par-tchat');
        $manager->persist($tarif3);

        $manager->flush();
    }
}
