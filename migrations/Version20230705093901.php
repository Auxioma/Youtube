<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230705093901 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ticket_paiement (id INT AUTO_INCREMENT NOT NULL, customer_id INT DEFAULT NULL, secure_key VARCHAR(255) NOT NULL, total_paid NUMERIC(20, 2) NOT NULL, invoice_number VARCHAR(255) NOT NULL, discount NUMERIC(20, 2) DEFAULT NULL, name_product VARCHAR(255) NOT NULL, INDEX IDX_34B5869F9395C3F3 (customer_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ticket_paiement ADD CONSTRAINT FK_34B5869F9395C3F3 FOREIGN KEY (customer_id) REFERENCES profile (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ticket_paiement DROP FOREIGN KEY FK_34B5869F9395C3F3');
        $this->addSql('DROP TABLE ticket_paiement');
    }
}
