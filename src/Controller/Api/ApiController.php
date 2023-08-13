<?php

namespace App\Controller\Api;

use App\Entity\ModeDeConsultation;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ModeDeConsultationRepository;
use App\Repository\TarifConsultationRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
   #[Route('/api/bouton/show/setting', name: 'api_bouton')]
    public function index(ModeDeConsultationRepository $consultation, TarifConsultationRepository $tarif): JsonResponse
    {
        $consultations = $consultation->findAll();
        $tarifs = $tarif->findAll();
        $chat   = $tarifs[4]->getPrice();
        $telephone  = $tarifs[3]->getPrice();
        $email      = $tarifs[0]->getPrice();

        $data = [];
        foreach ($consultations as $consultation) {
            $data[] = [
                'id' => $consultation->getId(),
                'OnLine' => $consultation->getIsOnline(),
                'chat' => $chat,
                'telephone' => $telephone,
                'email' => $email,
            ];
        }
        return new JsonResponse($data);
    }

    #[Route('/api/bouton/update/settings', name: 'update_settings', methods: ['POST'])]
    public function updateSettings(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        // Récupérer les données du formulaire envoyées via AJAX
        $data = json_decode($request->getContent(), true);

        // Récupérer les données du formulaire envoyées via AJAX
        $isEmailActive = $data['email'];
        $isTelephoneActive = $data['telephone'];
        $isTchatActive = $data['tchat'];

        $Email = $entityManager->getRepository(ModeDeConsultation::class)->findBy(['id' => '1']);
        $Email->setIsOnline($isEmailActive);

        $Telephone = $entityManager->getRepository(ModeDeConsultation::class)->findBy(['id' => '2']);
        $Telephone->setIsOnline($isTelephoneActive);

        $Tchat = $entityManager->getRepository(ModeDeConsultation::class)->findBy(['id' => '3']);
        $Tchat->setIsOnline($isTchatActive);

        $entityManager->flush();

        // Répondre avec un message de succès ou d'erreur
        return new JsonResponse(['success' => true]);
    }
}