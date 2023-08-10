<?php

// src/DataFixtures/UserFixtures.php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\User;
use App\Entity\Profile;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    private UserPasswordHasherInterface $userPasswordHasher;

    public function __construct(UserPasswordHasherInterface $userPasswordHasher)
    {
        $this->userPasswordHasher = $userPasswordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        // User 1
        $user1 = new User();
        $user1->setEmail('xavier.medium2023@gmail.com');
        $user1->setRoles(['ROLE_ADMIN']);
        $user1->setPassword($this->userPasswordHasher->hashPassword($user1, '0000'));
        $user1->setIsVerified(true);
            $profile1 = new Profile();
            $profile1->setPseudo($faker->userName);
            $profile1->setNom($faker->name);
            $profile1->setDateDeNaissance($faker->dateTimeThisCentury);
            $profile1->setNumeroTelephone($faker->e164PhoneNumber);
            $profile1->setAdresse($faker->address);
            $profile1->setCodePostal($faker->postcode);
            $profile1->setVille($faker->city);
            $profile1->setPays($faker->country);
            $profile1->setOptIn(true);
            $profile1->setUser($user1);
            $profile1->setCreatedAt(new \DateTimeImmutable());
            $profile1->setUpdatedAt(new \DateTimeImmutable());
            $this->addReference('profile1', $profile1);
            $manager->persist($profile1);
        $manager->persist($user1);

        // User 2
        $user2 = new User();
        $user2->setEmail('auxioma.g@gmail.com');
        $user2->setRoles(['ROLE_ADMIN']);
        $user2->setPassword($this->userPasswordHasher->hashPassword($user2, '0000')); 
        $user2->setIsVerified(true);
            $profile2 = new Profile();
            $profile2->setPseudo($faker->userName);
            $profile2->setNom($faker->name);
            $profile2->setDateDeNaissance($faker->dateTimeThisCentury);
            $profile2->setNumeroTelephone($faker->e164PhoneNumber);
            $profile2->setAdresse($faker->address);
            $profile2->setCodePostal($faker->postcode);
            $profile2->setVille($faker->city);
            $profile2->setPays($faker->country);
            $profile2->setOptIn(true);
            $profile2->setUser($user2);
            $profile2->setCreatedAt(new \DateTimeImmutable());
            $profile2->setUpdatedAt(new \DateTimeImmutable());
            $this->addReference('profile2', $profile2);
            $manager->persist($profile2);
        $manager->persist($user2);

        // User 3
        $user3 = new User();
        $user3->setEmail('auxioma.g@yahoo.com');
        $user3->setRoles(['ROLE_USER']);
        $user3->setPassword($this->userPasswordHasher->hashPassword($user3, '0000')); 
        $user3->setIsVerified(true);
            $profile3 = new Profile();
            $profile3->setPseudo($faker->userName);
            $profile3->setNom($faker->name);
            $profile3->setDateDeNaissance($faker->dateTimeThisCentury);
            $profile3->setNumeroTelephone($faker->e164PhoneNumber);
            $profile3->setAdresse($faker->address);
            $profile3->setCodePostal($faker->postcode);
            $profile3->setVille($faker->city);
            $profile3->setPays($faker->country);
            $profile3->setOptIn(true);
            $profile3->setUser($user3);
            $profile3->setCreatedAt(new \DateTimeImmutable());
            $profile3->setUpdatedAt(new \DateTimeImmutable());
            $this->addReference('profile3', $profile3);
            $manager->persist($profile3);
        $manager->persist($user3);

        $manager->flush();
    }
}

