<?php

namespace App\Controller\User\Consultation\Tchat;



use DateTimeImmutable;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Lcobucci\JWT\Encoding\ChainedFormatter;
use Lcobucci\JWT\Encoding\JoseEncoder;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Token\Builder;

class TchatController extends AbstractController
{
    #[Route('/user/tchat', name: 'tchat')]
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        $username = $this->getUser()->getId();

        $tokenBuilder = (new Builder(new JoseEncoder(), ChainedFormatter::default()));
        $algorithm    = new Sha256();
        $signingKey   = InMemory::plainText(random_bytes(32));

        $token = $tokenBuilder
            ->withClaim('uid', 1)
            ->getToken($algorithm, $signingKey);

        $token = $token->toString();

        $response =  $this->render('user/consultation_tchat/index.html.twig');

        $response->headers->setCookie(
            new Cookie(
                'mercureAuthorization',
                $token,
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