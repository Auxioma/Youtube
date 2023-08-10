<?php

namespace App\DataFixtures;

use App\Entity\BonusProduct;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class BonusProductFixtures extends Fixture  implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        
        for ($i = 0; $i <= 3; $i++) {
            $bonusProduct = new BonusProduct();
            $bonusProduct->setName('Bonus Product_ '.$i);
            $bonusProduct->setPrice($i.'00');
            $bonusProduct->setIsActive(true);
            $bonusProduct->setProduct($this->getReference('product_'.$i));
            $manager->persist($bonusProduct);
        }

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            ProductFixtures::class,
        ];
    }
}
