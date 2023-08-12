<?php

// src/DataFixtures/TarifConsultationFixtures.php

namespace App\DataFixtures;

use App\Entity\TarifConsultation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TarifConsultationFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $tarif = new TarifConsultation();
        $tarif->setName("Voyance par Email 1");
        $tarif->setDescription("Voyance par Email");
        $tarif->setModeDeConsultation("Email");
        $tarif->setPrice("10.99"); // Remplacez par le prix approprié
        $tarif->setIsActive(true);
        $tarif->setSlug("email-1");
        $tarif->setUser($this->getReference('user-1'));
        $manager->persist($tarif);

        $tarif = new TarifConsultation();
        $tarif->setName("Voyance par Email 2");
        $tarif->setDescription("Voyance par Email 2");
        $tarif->setModeDeConsultation("Email");
        $tarif->setPrice("10.99"); // Remplacez par le prix approprié
        $tarif->setIsActive(true);
        $tarif->setSlug("email-2");
        $tarif->setUser($this->getReference('user-1'));
        $manager->persist($tarif);

        $tarif = new TarifConsultation();
        $tarif->setName("Voyance par Email 3");
        $tarif->setDescription("Voyance par Email 3");
        $tarif->setModeDeConsultation("Email");
        $tarif->setPrice("10.99"); // Remplacez par le prix approprié
        $tarif->setIsActive(true);
        $tarif->setSlug("email-3");
        $tarif->setUser($this->getReference('user-1'));
        $manager->persist($tarif);

        $tarif = new TarifConsultation();
        $tarif->setName("Voyance par telephone");
        $tarif->setDescription("Voyance par telephone");
        $tarif->setModeDeConsultation("Telephone");
        $tarif->setPrice("10.99"); // Remplacez par le prix approprié
        $tarif->setIsActive(true);
        $tarif->setSlug("telephone");
        $tarif->setUser($this->getReference('user-1'));
        $manager->persist($tarif);

        $tarif = new TarifConsultation();
        $tarif->setName("Voyance par Tchat");
        $tarif->setDescription("Voyance par Tchat");
        $tarif->setModeDeConsultation("Tchat");
        $tarif->setPrice("10.99"); // Remplacez par le prix approprié
        $tarif->setIsActive(true);
        $tarif->setSlug("Tchat");
        $tarif->setUser($this->getReference('user-1'));
        $manager->persist($tarif);

        
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
