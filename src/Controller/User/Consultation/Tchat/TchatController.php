<?php

namespace App\Controller\User\Consultation\Tchat;



use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use DateTimeImmutable; 
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Signer\Hmac\Sha256;


class TchatController extends AbstractController
{
    #[Route('/user/tchat', name: 'tchat')]
    public function index(): Response
    {
        $username = $this->getUser()->getProfile()->getPseudo();

        $config = Configuration::forSymmetricSigner(new Sha256(), InMemory::plainText($this->getParameter('mercure_secret_key')));
        $token = $config->builder()
            ->withClaim('mercure', ['subscribe' => [sprintf("/%s", $username)]])
            ->getToken($config->signer(), $config->signingKey())
        ;

        $response =  $this->render('user/consultation_tchat/index.html.twig');

        $response->headers->setCookie(
            new Cookie(
                'mercureAuthorization',
                $token->toString(),
                (new \DateTime())
                    ->add(new \DateInterval('PT2H')),
                '/.well-known/mercure',
                null,
                false,
                true,
                false,
                'strict',

            )
        );

        return $response;
    }
}