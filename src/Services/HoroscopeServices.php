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

    public function list()
    {
        // Je met dans un tableau tous XML que je veux afficher
        $horoscopes = [
            '0' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_verseau.xml',
            '1' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_poissons.xml',
            '2' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_belier.xml',
            '3' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_taureau.xml',
            '4' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_gemeaux.xml',
            '5' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_cancer.xml',
            '6' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_lion.xml',
            '7' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_vierge.xml',
            '8' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_balance.xml',
            '9' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_scorpion.xml',
            '10' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_sagittaire.xml',
            '11' => 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_capricorne.xml',
        ];

        // Je récupere dans un tableau les données que je veux afficher
        foreach($horoscopes as $key => $horoscope){
            $xml = simplexml_load_file($horoscope);
            $json = json_encode($xml);
            $array = json_decode($json,TRUE);

            $titre = $array['channel']['item']['title'];
            $titre = explode(' ', $titre); 
            $link = strtolower($titre[2]);
            $titre = $titre[0] . ' ' . $titre[2];

           

            $description = $array['channel']['item']['description'];
            $description = strip_tags($description);
            $description = explode("\n", $description);
            $description = array_filter($description);
            $description = array_values($description);
            $description = $description[0];
            $description = substr($description, 20, 100);

            $horoscopes[$key] = [
                'titre' => $titre,
                'description' => $description,
                'link' => $link
            ];
        }

        return $horoscopes;
    }
}