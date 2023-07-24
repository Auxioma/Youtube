<?php

namespace App\Controller\User\Consultation\Tchat;

use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Token\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Encoding\ChainedFormatter;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TchatController extends AbstractController
{
    #[Route('/user/tchat', name: 'tchat')]
    public function index(): Response
    {
        $username = $this->getUser()->getProfile()->getPseudo();

        // lcobucci / jwt 5.0.0
        // https://lcobucci-jwt.readthedocs.io/en/latest/
        $signer = new Sha256();
        $encoder = new JoseEncoder();

        $




        
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