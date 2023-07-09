<?php

namespace App\Services;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class CartServices
{
    public function __construct(
        private RequestStack $requestStack,
        private EntityManagerInterface $em
    ){}

    public function getSession(): ?object
    {
        return $this->requestStack->getSession();
    }

    public function add(int $id)
    {
        $cart = $this->getSession()->get('cart', []); 
        unset($cart);   $cart[$id] = 1;
        $this->getSession()->set('cart', $cart);
    }

    public function getFullCart()
    {
        $cart = $this->getSession()->get('cart', []);
        $cardSData = [];

        foreach($cart as $id => $quantity) {
            $panier = $this->em->getRepository(Product::class)->find($id);

            if(!$panier) {
                die('Une erreur est survenue');
            }

            $cardSData[] = [
                'product' => $panier ,
                'quantity' => $quantity
            ];
        }
        return $cardSData;
    }

    public function getTotal()
    {
        $total = 0;

        foreach($this->getFullCart() as $item) {
            $totalItem = $item['product']->getPriceTTC() * $item['quantity'];
            $total += $totalItem;
        }

        return $total;
    }

    public function removeAll()
    {
        $this->getSession()->remove('cart');
    }
}

