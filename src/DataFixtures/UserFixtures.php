<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Profile;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // 1 user et 1 admin
        $user = new User();
        $user->setEmail('user@user.user');
        $user->setRoles(['ROLE_USER']);
        $user->setPassword('$2y$13$QJe85FeS2nbLYxPlSSzqOu2jA8iQdJjh4z3RDubZduTW6efD1Q7am');
        $user->setIsVerified(true);
        $user->setCreatedAt(new \DateTimeImmutable());
        $user->setUpdatedAt(new \DateTimeImmutable());

            // Je renseigne le profile de l'utilisateur
            $profile = new Profile();
            $profile->setPseudo('user');
            $profile->setNom('user');
            $profile->setDateDeNaissance(new \DateTimeImmutable());
            $profile->setNumeroTelephone('0606060606');
            $profile->setAdresse('31 Rue De Paris');
            $profile->setCodePostal('75000');
            $profile->setVille('Paris');
            $profile->setPays('France');
            $profile->setOptIn(true);
            $profile->setUser($user);
            $manager->persist($profile);
        $manager->persist($user);


        // Le profile de l'Admin
        $admin = new User();
        $admin->setEmail('admin@admin.admin');
        $admin->setRoles(['ROLE_ADMIN']);
        $admin->setPassword('$2y$13$QJe85FeS2nbLYxPlSSzqOu2jA8iQdJjh4z3RDubZduTW6efD1Q7am');
        $admin->setIsVerified(true);
        $admin->setCreatedAt(new \DateTimeImmutable());
        $admin->setUpdatedAt(new \DateTimeImmutable());

            // Je renseigne le profile de l'admin
            $profile = new Profile();
            $profile->setPseudo('admin');
            $profile->setNom('admin');
            $profile->setDateDeNaissance(new \DateTimeImmutable());
            $profile->setNumeroTelephone('0606060606');
            $profile->setAdresse('31 Rue Du Paradis');
            $profile->setCodePostal('75000');
            $profile->setVille('Paris');
            $profile->setPays('France');
            $profile->setOptIn(true);
            $profile->setUser($admin);
            $manager->persist($profile);
        $manager->persist($admin);
        
        $manager->flush();
    }
}
