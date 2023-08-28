<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230827093509 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE solde_compte_client ADD avis_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE solde_compte_client ADD CONSTRAINT FK_926E374197E709F FOREIGN KEY (avis_id) REFERENCES avis (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_926E374197E709F ON solde_compte_client (avis_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE solde_compte_client DROP CONSTRAINT FK_926E374197E709F');
        $this->addSql('DROP INDEX UNIQ_926E374197E709F');
        $this->addSql('ALTER TABLE solde_compte_client DROP avis_id');
    }
}
