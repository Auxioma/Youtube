<?php

namespace App\EventListener;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Twig\Environment;

class MaintenanceListener{
    private $maintenance;
    private $twig;

    public function __construct($maintenance, Environment $twig){
        $this->maintenance = $maintenance;
        $this->twig = $twig;
    }

    public function onKernelRequest(RequestEvent $event){

        // On verifie l'IP 127.0.0.1 ou 81.67.188.146 pour ne pas afficher la page de maintenance
        if( $event->getRequest()->getClientIp() === '127.0.0.1' || 
            $event->getRequest()->getClientIp() === '81.67.188.146' || 
            $event->getRequest()->getClientIp() === '91.166.94.206'){
            return;
        }

        // On vérifie si le fichier .maintenance n'existe pas
        if(!file_exists($this->maintenance)){
            return;
        }

        // Le fichier existe
        // On définit la réponse
        $event->setResponse(
            new Response(
                $this->twig->render('maintenance/maintenance.html.twig'),
                Response::HTTP_SERVICE_UNAVAILABLE
            )
        );
        // On stoppe le traitement des évènements
        $event->stopPropagation();
    }
}