<?php

namespace App\Controller\Admin;

use App\Entity\BonusProduct;
use App\Form\BonusProductType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/bonus')]
#[IsGranted('ROLE_ADMIN', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
class BonusProductController extends AbstractController
{
    #[Route('/{id}/edit', name: 'app_admin_bonus_product_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, BonusProduct $bonusProduct, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(BonusProductType::class, $bonusProduct);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_product_c_r_u_d_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/bonus_product/edit.html.twig', [
            'bonus_product' => $bonusProduct,
            'form' => $form, 
        ]);
    }
}
