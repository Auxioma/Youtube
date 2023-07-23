<?php

namespace App\Controller\User\Consultation\Tchat;



use DateTimeImmutable;
use Lcobucci\JWT\Signer\Key;
use Lcobucci\JWT\Token\Builder;
use Lcobucci\JWT\Signer\Hmac\Sha256;
use Lcobucci\JWT\Signer\Key\InMemory;
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

        // je suis passer à "lcobucci/jwt": "^5.0", pour pouvoir utiliser le Token
        $sha = new Sha256();
        $key = InMemory::plainText($this->getParameter('mercure_secret_key'));
        $claim = ['subscribe' => [sprintf("/%s", $username)]];

        $builder = new Builder(new JoseEncoder(), new ChainedFormatter([]));
        $token = $builder
            ->withClaim('mercure', $claim)
            ->getToken($sha, $key);
        
        dd($token);

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