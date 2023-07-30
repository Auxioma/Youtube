<?php

namespace App\Controller\Api;

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
}