<?php

namespace App\DataFixtures;

use DateTimeImmutable;
use App\Entity\ModeDeConsultation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ModeDeConsultationFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // 3 mode de contultation voyance par Email, Telephone, Tchat
        $modeDeConsultation = new ModeDeConsultation();
        $modeDeConsultation->setTitre('Voyance par Email');
        $modeDeConsultation->setDescription('Voyance par Email');
        $modeDeConsultation->setSlug('voyance-par-email');
        $modeDeConsultation->setGrandeDescription('Voyance par Email');
        $modeDeConsultation->setCreatedAt(new DateTimeImmutable());
        $modeDeConsultation->setUpdatedAt(new DateTimeImmutable());
        $modeDeConsultation->setImageName('service-details.png');
        $manager->persist($modeDeConsultation);

        $modeDeConsultation2 = new ModeDeConsultation();
        $modeDeConsultation2->setTitre('Voyance par Telephone');
        $modeDeConsultation2->setDescription('Voyance par Telephone');
        $modeDeConsultation2->setSlug('voyance-par-telephone');
        $modeDeConsultation2->setGrandeDescription('Voyance par Telephone');
        $modeDeConsultation2->setCreatedAt(new DateTimeImmutable());
        $modeDeConsultation2->setUpdatedAt(new DateTimeImmutable());
        $modeDeConsultation2->setImageName('service-details.png');
        $manager->persist($modeDeConsultation2);

        $modeDeConsultation3 = new ModeDeConsultation();
        $modeDeConsultation3->setTitre('Voyance par Tchat');
        $modeDeConsultation3->setDescription('Voyance par Tchat');
        $modeDeConsultation3->setSlug('voyance-par-tchat');
        $modeDeConsultation3->setGrandeDescription('Voyance par Tchat');
        $modeDeConsultation3->setCreatedAt(new DateTimeImmutable());
        $modeDeConsultation3->setUpdatedAt(new DateTimeImmutable());
        $modeDeConsultation3->setImageName('service-details.png');
        $manager->persist($modeDeConsultation3);

        $manager->flush();
    }
}
