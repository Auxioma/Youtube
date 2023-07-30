<?php

namespace App\Controller\Api;

use App\Entity\ModeDeConsultation;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ModeDeConsultationRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiController extends AbstractController
{
    private ModeDeConsultationRepository $consultation;

    public function __construct(ModeDeConsultationRepository $consultation)
    {
        $this->consultation = $consultation;
    }

   #[Route('/api/bouton', name: 'api_bouton')]
    public function index(ModeDeConsultationRepository $consultation): JsonResponse
    {
        $consultations = $consultation->findAll();
        $data = [];
        foreach ($consultations as $consultation) {
            $data[] = [
                'id' => $consultation->getId(),
                'OnLine' => $consultation->getIsOnline(),
            ];
        }
        return $this->json($data);
    }

    #[Route('/api/bouton/update/settings', name: 'update_settings', methods: ['POST'])]
    public function updateSettings(Request $request, EntityManagerInterface $entityManager)
    {
        // Récupérer les données du formulaire envoyées via AJAX
        $isTelephoneActive = $request->request->get('telephone');
        $isEmailActive = $request->request->get('email');
        $isTchatActive = $request->request->get('tchat');

        // Effectuer la mise à jour en base de données en fonction des données reçues
        // Mettez ici votre propre logique pour mettre à jour les données en base de données.
        // Voici un exemple d'utilisation d'une entité Doctrine :

        $settings = $entityManager->getRepository(ModeDeConsultation::class)->findAll();
        $settings[0]->setIsOnline($isEmailActive);
        $settings[1]->setIsOnline($isTelephoneActive);
        $settings[2]->setIsOnline($isTchatActive);
        $entityManager->flush();

        // Répondre avec un message de succès ou d'erreur
        return new JsonResponse(['success' => true]);
    }
}