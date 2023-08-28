<?php

// src/DataFixtures/TicketPaiementFixtures.php

namespace App\DataFixtures;

use App\Entity\Profile;
use App\Entity\TicketPaiement;
use App\Entity\SoldeCompteClient;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TicketPaiementFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // Création d'une instance de TicketPaiement
        $ticketPaiement = new TicketPaiement();
        $ticketPaiement->setSecureKey('secure_key_123');
        $ticketPaiement->setTotalPaidTTC('100.00');
        $ticketPaiement->setInvoiceNumber('INV123');
        $ticketPaiement->setDiscount('10.00');
        $ticketPaiement->setNameProduct('Product Name');
        $ticketPaiement->setCreatedAt(new \DateTime());
        $profile = $this->getReference('profile1');
        $ticketPaiement->setCustomer($profile);
            $soldeCompteClient = new SoldeCompteClient();
            $soldeCompteClient->setPrixRestant('100.00');
            $soldeCompteClient->setCustomer($profile);
            $soldeCompteClient->setCreatedAt(new \DateTimeImmutable('2023-08-05 12:29:34'));
            $manager->persist($soldeCompteClient);
        $manager->persist($ticketPaiement);

        $ticketPaiement = new TicketPaiement();
        $ticketPaiement->setSecureKey('secure_key_123');
        $ticketPaiement->setTotalPaidTTC('100.00');
        $ticketPaiement->setInvoiceNumber('INV123');
        $ticketPaiement->setDiscount('10.00');
        $ticketPaiement->setNameProduct('Product Name');
        $ticketPaiement->setCreatedAt(new \DateTime());
        $profile = $this->getReference('profile2');
        $ticketPaiement->setCustomer($profile);
            $soldeCompteClient = new SoldeCompteClient();
            $soldeCompteClient->setPrixRestant('100.00');
            $soldeCompteClient->setCustomer($profile);
            $soldeCompteClient->setCreatedAt(new \DateTimeImmutable('2023-08-05 12:29:34'));
            $manager->persist($soldeCompteClient);
        $manager->persist($ticketPaiement);

        $ticketPaiement = new TicketPaiement();
        $ticketPaiement->setSecureKey('secure_key_123');
        $ticketPaiement->setTotalPaidTTC('100.00');
        $ticketPaiement->setInvoiceNumber('INV123');
        $ticketPaiement->setDiscount('10.00');
        $ticketPaiement->setNameProduct('Product Name');
        $ticketPaiement->setCreatedAt(new \DateTime());
        $profile = $this->getReference('profile3');
        $ticketPaiement->setCustomer($profile);
            $soldeCompteClient = new SoldeCompteClient();
            $soldeCompteClient->setPrixRestant('100.00');
            $soldeCompteClient->setCustomer($profile);
            $soldeCompteClient->setCreatedAt(new \DateTimeImmutable('2023-08-05 12:29:34'));
            $manager->persist($soldeCompteClient);
        $manager->persist($ticketPaiement);




        // Exécution des requêtes SQL
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class, // Remplacez ceci par la classe de fixture Profile
        ];
    }
}
