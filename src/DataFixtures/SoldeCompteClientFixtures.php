<?php

// src/DataFixtures/SoldeCompteClientFixtures.php

namespace App\DataFixtures;

use App\Entity\SoldeCompteClient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SoldeCompteClientFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // Création de la première entrée
        $solde1 = new SoldeCompteClient();
        $solde1->setCustomer($this->getReference('profile1'));
        $solde1->setPrixRestant(8.00);
        $solde1->setCreatedAt(new \DateTime('2023-08-09 12:29:34'));
        $solde1->setTypeDeConsultation('Email');
        $manager->persist($solde1);

        // Création de la deuxième entrée
        $solde2 = new SoldeCompteClient();
        $solde2->setCustomer($this->getReference('profile2'));
        $solde2->setPrixRestant(5.44);
        $solde2->setCreatedAt(new \DateTime('2023-08-15 12:29:34'));
        $solde2->setTypeDeConsultation('Telephone');
        $manager->persist($solde2);

        // Création de la troisième entrée
        $solde3 = new SoldeCompteClient();
        $solde3->setCustomer($this->getReference('profile3'));
        $solde3->setPrixRestant(86.51);
        $solde3->setCreatedAt(new \DateTime('2023-08-20 12:29:34'));
        $solde3->setTypeDeConsultation('Tchat');
        $manager->persist($solde3);

        $solde4 = new SoldeCompteClient();
        $solde4->setCustomer($this->getReference('profile3'));
        $solde4->setPrixRestant(5.00);
        $solde4->setCreatedAt(new \DateTime('2023-08-25 12:29:34'));
        $solde4->setBonusByAdmin('Xavier');
        $manager->persist($solde4);


        

        // Enregistrement des données en base de données
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
