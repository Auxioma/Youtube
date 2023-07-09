<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230707094046 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE consultation_email (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, reponse_id INT DEFAULT NULL, message LONGTEXT NOT NULL, INDEX IDX_9C089E5AA76ED395 (user_id), INDEX IDX_9C089E5ACF18BB82 (reponse_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE solde_compte_client (id INT AUTO_INCREMENT NOT NULL, customer_id INT DEFAULT NULL, prix_restant NUMERIC(20, 2) NOT NULL, INDEX IDX_926E3749395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE consultation_email ADD CONSTRAINT FK_9C089E5AA76ED395 FOREIGN KEY (user_id) REFERENCES profile (id)');
        $this->addSql('ALTER TABLE consultation_email ADD CONSTRAINT FK_9C089E5ACF18BB82 FOREIGN KEY (reponse_id) REFERENCES consultation_email (id)');
        $this->addSql('ALTER TABLE solde_compte_client ADD CONSTRAINT FK_926E3749395C3F3 FOREIGN KEY (customer_id) REFERENCES profile (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE consultation_email DROP FOREIGN KEY FK_9C089E5AA76ED395');
        $this->addSql('ALTER TABLE consultation_email DROP FOREIGN KEY FK_9C089E5ACF18BB82');
        $this->addSql('ALTER TABLE solde_compte_client DROP FOREIGN KEY FK_926E3749395C3F3');
        $this->addSql('DROP TABLE consultation_email');
        $this->addSql('DROP TABLE solde_compte_client');
    }
}
