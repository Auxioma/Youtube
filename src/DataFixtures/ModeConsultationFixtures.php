<?php

// src/DataFixtures/ModeConsultationFixtures.php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\ModeDeConsultation;

class ModeConsultationFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $modeConsultationData = [
            [
                'titre' => 'Voyance par Email',
                'description' => 'Voyance par Email',
                'slug' => 'voyance-par-email',
                'grandeDescription' => 'Voyance par Email',
                'imageName' => 'service-details.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
                'isOnline' => '2',
            ],
            [
                'titre' => 'Voyance par Telephone',
                'description' => 'Voyance par Telephone',
                'slug' => 'voyance-par-telephone',
                'grandeDescription' => 'Voyance par Telephone',
                'imageName' => 'service-details.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
                'isOnline' => '1',
            ],
            [
                'titre' => 'Voyance par Tchat',
                'description' => 'Voyance par Tchat',
                'slug' => 'voyance-par-tchat',
                'grandeDescription' => 'Voyance par Tchat',
                'imageName' => 'service-details.png',
                'createdAt' => new \DateTimeImmutable(),
                'updatedAt' => new \DateTimeImmutable(),
                'isOnline' => '0',
            ],
        ];

        foreach ($modeConsultationData as $data) {
            $modeConsultation = new ModeDeConsultation();
            $modeConsultation->setTitre($data['titre']);
            $modeConsultation->setDescription($data['description']);
            $modeConsultation->setSlug($data['slug']);
            $modeConsultation->setGrandeDescription($data['grandeDescription']);
            $modeConsultation->setImageName($data['imageName']);
            $modeConsultation->setCreatedAt($data['createdAt']);
            $modeConsultation->setUpdatedAt($data['updatedAt']);
            $modeConsultation->setIsOnline($data['isOnline']);

            $manager->persist($modeConsultation);
        }

        $manager->flush();
    }
}

