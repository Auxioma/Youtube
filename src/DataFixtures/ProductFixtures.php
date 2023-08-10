<?php

// src/DataFixtures/ProductFixtures.php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;

class ProductFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $productsData = [
            ['Forfait 10 minutes', 20.00, 20.00, 16.67, true],
            ['Forfait 20 minutes', 20.00, 40.00, 33.33, true],
            ['Forfait 30 minutes', 20.00, 60.00, 50.00, true],
            ['Forfait 60 minutes', 20.00, 120.00, 100.00, true],
        ];

        foreach ($productsData as $key => $data) {
            [$name, $tva, $priceTtc, $priceHt, $isActive] = $data;
            
            $product = new Product();
            $product->setName($name);
            $product->setTva($tva);
            $product->setPriceTtc($priceTtc);
            $product->setPriceHt($priceHt);
            $product->setIsActive($isActive);
            $this->addReference('product_' . $key, $product);
            $manager->persist($product);
        }

        $manager->flush();
    }
}
