<?php

namespace App\Services;

class HoroscopeServices 
{
    public function main(){
        $belier = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_belier.xml';
        $taureau = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_taureau.xml';
        $gemeaux = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_gemeaux.xml';
        $cancer = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_cancer.xml';
        $lion = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_lion.xml';
        $vierge = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_vierge.xml';
        $balance = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_balance.xml';
        $scorpion = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_scorpion.xml';
        $sagittaire = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_sagittaire.xml';
        $capricorne = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_capricorne.xml';
        $verseau = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_verseau.xml';
        $poissons = 'https://www.asiaflash.com/horoscope/rss_hebdotay_complet_poissons.xml';

        $array = [
            '0' => $belier,
            '1' => $taureau,
            '2' => $gemeaux,
            '3' => $cancer,
            '4' => $lion,
            '5' => $vierge,
            '6' => $balance,
            '7' => $scorpion,
            '8' => $sagittaire,
            '9' => $capricorne,
            '10' => $verseau,
            '11' => $poissons
        ];

        $horoscope = [];

        foreach($array as $key => $value){
            $xml = simplexml_load_file($value);
            $json = json_encode($xml);
            $array = json_decode($json,TRUE);
            $horoscope[$key] = $array;
        }

        return $horoscope;
    }
}