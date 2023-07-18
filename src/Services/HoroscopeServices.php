<?php

namespace App\Services;

class HoroscopeServices 
{
    public function getHoroscope($slug){

        $url = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_'.$slug.'.xml';

        $xml = simplexml_load_file($url);
        $json = json_encode($xml);
        $array = json_decode($json,TRUE);

        // je créer un tableau avec les données que je veux
        // je veux recuperer le titre, la description
        // et la date de publication
        $titre = $array['channel']['item']['title'];
        $date = $array['channel']['item']['pubDate'];
        $link = $array['channel']['item']['link'];
        
        // Je ne veux pas affiché le HTML dans la description
        // je vais donc utiliser la fonction strip_tags
        // qui va supprimer les balises HTML
        $description = $array['channel']['item']['description'];
        $description = strip_tags($description);

        // mettre dans un tableau les paragraphes des descriptions
        $description = explode("\n", $description);
        $description = array_filter($description);
        $description = array_values($description);


        // je vais maintenant créer un tableau avec les données
        // que je veux afficher
        $array = [
            'titre' => $titre,
            'date' => $date,
            'description' => $description,
            'link' => $link
        ];

        return $array;
    }
}