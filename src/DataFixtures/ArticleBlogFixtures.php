<?php

// src/DataFixtures/ArticleBlogFixtures.php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use App\Entity\ArticleBlog;

class ArticleBlogFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        // Article 1
        $article1 = new ArticleBlog();
        $article1->setArticle('Vous souhaitez découvrir les secrets du tarot de Marseille et la signification de ses cartes ?');
        $article1->setTitre('Tarot de Marseille et la signification');
        $article1->setSlug('article-1');
        $article1->setCategorie($this->getReference('category-1')); 
        $article1->setIsActive(true);
        $article1->setLongDescription('<p>Vous êtes à la recherche d\'une voyance sérieuse et de qualité ? Vous souhaitez découvrir les secrets du tarot de Marseille et la signification de ses cartes ? Alors, vous êtes au bon endroit ! Sur le site Ursuliah, vous trouverez des voyants professionnels qui vous feront bénéficier de leur don et de leur expérience. Que ce soit par tchat, par téléphone ou par mail, vous pourrez consulter en toute confiance et obtenir des réponses à vos questions.</p>
        <p>Parmi les cartes du tarot de Marseille, il y en a une qui attire particulièrement l\'attention : le bateleur. C\'est la première carte du jeu, celle qui symbolise le commencement, le mouvement et la transformation. Le bateleur est un personnage plein d\'agilité et de force, qui maîtrise l\'art de la magie. Il représente le potentiel, la créativité et l\'innocence. Il vous invite à vous mettre en action et à réaliser vos projets. Mais que signifie exactement cette carte ? Quelles sont ses caractéristiques et son interprétation ? C\'est ce que nous allons vous expliquer dans cet article.</p>
        <p>Le bateleur est un jeune homme au visage juvénile, qui se tient debout devant une table sur laquelle sont disposés différents objets. Il porte un costume bariolé, qui reflète son esprit libre, sauvage et séducteur. Il a un regard tourné vers l\'avenir, qui exprime sa confiance et son optimisme. Il tient dans sa main gauche une baguette, symbole de pouvoir, de puissance et d\'agilité. Il tient dans sa main droite un rond jaune, qui représente le soleil, la lumière et la vitalité. La table renvoie à la table de tarot, mais aussi à la table d’Émeraude ou à une scène de théâtre. Les objets posés dessus montrent que le bateleur a toutes les ressources nécessaires pour réussir son plan. Il est prêt à se mettre en mouvement et à créer sa propre réalité.</p>
        <p>L\'interprétation de la carte du bateleur dans le tarot dépend du contexte du tirage et de la position de la carte. Si elle est tirée à l\'endroit, elle signifie que vous êtes prêt à commencer quelque chose de nouveau et que vous avez toutes les compétences et la créativité nécessaires pour réussir. C\'est une carte qui parle de potentiel, de commencement et d\'innocence. Elle révèle ce qui se trouve en vous, c\'est-à-dire le début d\'un acte de création et le désir d\'accomplir vos objectifs. Sur le court terme, l’arcane du bateleur est le présage d’un nouveau départ. Vous êtes motivé à l’idée de construire un avenir qui vous ressemble. Dans votre vie sentimentale comme dans votre vie professionnelle, de nouvelles aventures vous attendent. Il ne vous reste plus qu’à vous mettre en mouvement. Sur le long terme, le bateleur vous pousse à vous questionner sur vos motivations premières. Vous devez trouver vos objectifs concrets ou les remettre en question si besoin.</p>
        <p>Si elle est tirée à l\'envers, elle signifie que vous manquez de confiance en vous ou que vous êtes confronté à des obstacles ou des retards. C\'est une carte qui parle de manipulation, de blocage et de maladresse. Elle révèle ce qui vous empêche d\'avancer, c\'est-à-dire un manque d\'intention claire ou un excès d\'égoïsme. Sur le court terme, l’arcane du bateleur inversé est le signe d’une stagnation ou d’une perte d\'élan. Vous avez du mal à concrétiser vos projets ou à prendre des décisions. Vous pouvez être victime ou coupable de tromperie ou de violence. Sur le long terme, le bateleur inversé vous invite à revoir votre attitude ou votre stratégie. Vous devez être plus honnête avec vous-même et avec les autres. Vous devez aussi être plus prudent et plus organisé.</p>
        <p>Le bateleur est une carte importante dans le tarot de Marseille, car elle représente le début du voyage initiatique du consultant. Elle lui montre qu\'il a en lui toutes les potentialités pour réaliser ses rêves, mais qu\'il doit aussi faire preuve de discernement et de maîtrise. Le bateleur est un magicien, mais aussi un jongleur. Il doit savoir jouer avec les éléments, mais aussi garder l\'équilibre.</p>
        <p>Si vous souhaitez en savoir plus sur le bateleur ou sur les autres cartes du tarot de Marseille, n\'hésitez pas à consulter le site Ursuliah. Vous y trouverez des articles détaillés et des conseils pratiques pour apprendre à tirer les cartes et à les interpréter. Vous pourrez aussi profiter d\'une voyance par tchat, par téléphone ou par mail avec des voyants expérimentés et bienveillants. Que vous ayez des questions sur votre avenir amoureux, professionnel, familial ou personnel, vous trouverez sur Ursuliah voyance la réponse que vous cherchez. Alors, n\'attendez plus et découvrez dès maintenant le pouvoir du tarot de Marseille et du bateleur !</p>');
        $article1->setImageName('blog_3_1.jpg');
        $article1->setCreatedAt(new \DateTimeImmutable());
        $article1->setUpdatedAt(new \DateTimeImmutable());
        $manager->persist($article1);

        // Article 2
        $article2 = new ArticleBlog();
        $article2->setArticle('Voyance chez les Romains');
        $article2->setTitre('Voyance chez les Romains');
        $article2->setSlug('article-2');
        $article2->setCategorie($this->getReference('category-1')); 
        $article2->setIsActive(true);
        $article2->setLongDescription('<p>La voyance chez les Romains</p>
        <p>La voyance occupait une place importante dans la société romaine antique et était souvent considérée comme une pratique religieuse et spirituelle. Les Romains croyaient fermement que les dieux et le destin pouvaient être influencés et interprétés à travers divers moyens de divination. Voici quelques-unes des formes de voyance couramment pratiquées chez les Romains :</p>
        <ol>
            <li><strong>Haruspices :</strong> Les haruspices étaient des prêtres spécialisés dans la lecture des entrailles d\'animaux sacrifiés, principalement les foies, pour prédire l\'avenir et interpréter les signes divins. Les formes, les textures et les anomalies des organes étaient analysées pour obtenir des présages concernant les événements à venir.</li>
            <li><strong>Augures :</strong> Les augures étaient des prêtres chargés d\'observer et d\'interpréter les signes des oiseaux (souvent des volatiles comme les corbeaux ou les aigles) en vol ou en picorant. Ils croyaient que les mouvements et les comportements des oiseaux pouvaient donner des indications sur la volonté des dieux et les événements futurs.</li>
            <li><strong>Astrologie :</strong> L\'astrologie était également présente dans la société romaine. Les Romains croyaient que les positions des planètes et des étoiles avaient une influence sur les affaires humaines. Les astrologues romains préparaient des horoscopes et interprétaient les mouvements célestes pour prédire les destinées individuelles et collectives.</li>
            <li><strong>Lecture des entrailles d\'animaux :</strong> Outre les haruspices, d\'autres pratiques impliquaient la lecture des entrailles d\'animaux sacrifiés. Des animaux tels que les poulets étaient sacrifiés et leurs organes étaient examinés pour déduire des présages et des réponses aux questions posées.</li>
            <li><strong>Sortilèges et amulettes :</strong> Les Romains utilisaient également des sortilèges, des incantations et des amulettes pour conjurer le mal et attirer la protection divine. Ces pratiques étaient souvent associées à des rituels religieux et à la recherche de conseils pour des questions spécifiques.</li>
            <li><strong>Oracles et consultations divines :</strong> Les Romains consultaient des oracles, souvent situés dans des temples dédiés à des dieux spécifiques, pour obtenir des réponses aux questions importantes ou pour connaître les volontés divines.</li>
        </ol>
        <p>Il est important de noter que ces pratiques de voyance étaient étroitement liées à la religion et à la spiritualité romaines. Elles étaient utilisées pour guider les décisions politiques, militaires et personnelles, et étaient considérées comme des moyens de communiquer avec les dieux et d\'obtenir leur guidance.</p>
        <p>Cependant, comme c\'est souvent le cas avec la voyance, il y avait certainement des degrés de scepticisme et de manipulation, avec des individus pouvant exploiter ces pratiques à des fins personnelles ou politiques. Malgré cela, la voyance demeurait une composante significative de la culture et de la société romaines.</p>');
        $article2->setImageName('blog_3_1.jpg');
        $article2->setCreatedAt(new \DateTimeImmutable());
        $article2->setUpdatedAt(new \DateTimeImmutable());
        $manager->persist($article2);

        // Article 3
        $article3 = new ArticleBlog();
        $article3->setArticle('Types de Voyance');
        $article3->setTitre('Types de Voyance');
        $article3->setSlug('article-3');
        $article3->setCategorie($this->getReference('category-1')); 
        $article3->setLongDescription('  <ul>
        <li><strong>Astrologie:</strong> Utilisation des positions planétaires pour prédire des événements.</li>
        <li><strong>Tarot:</strong> Lecture de cartes pour obtenir des insights sur la vie.</li>
        <li><strong>Cartomancie:</strong> Utilisation de cartes, comme les cartes de jeu ordinaires, pour la divination.</li>
        <li><strong>Numérologie:</strong> Attribuer des significations aux nombres pour prédire et analyser.</li>
        <li><strong>Pendule divinatoire:</strong> Utilisation d\'un pendule pour répondre aux questions.</li>
        <li><strong>Runes:</strong> Utilisation de caractères anciens pour prédire l\'avenir.</li>
        <li><strong>Médiumnité:</strong> Communication avec les esprits pour des messages ou conseils.</li>
        <li><strong>Clairvoyance, Clairaudience, Clairsentience:</strong> Réception intuitive d\'informations sensorielles.</li>
        <li><strong>Chiromancie:</strong> Lecture des lignes de la main pour prédire.</li>
        <li><strong>Lecture de café ou de thé:</strong> Interprétation des motifs laissés dans une tasse.</li>
      </ul>
      <p>Avant de choisir une méthode de voyance, il est important d\'être critique et réaliste. Gardez à l\'esprit que les résultats ne sont pas garantis et recherchez des praticiens réputés.</p>');
        $article3->setImageName('blog_3_1.jpg');
        $article3->setCreatedAt(new \DateTimeImmutable());
        $article3->setUpdatedAt(new \DateTimeImmutable());
        $article3->setIsActive(true);
        $manager->persist($article3);

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CategoryBlogFixtures::class, // Make sure this class depends on CategoryBlogFixtures
        ];
    }
}
