<?php

namespace App\Test\Controller;

use App\Entity\TicketPaiement;
use App\Repository\TicketPaiementRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TicketPaiementControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private TicketPaiementRepository $repository;
    private string $path = '/admin/ticket/paiement/c/r/u/d/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(TicketPaiement::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TicketPaiement index');

        // Use the $crawler to perform additional assertions e.g.
        // self::assertSame('Some text on the page', $crawler->filter('.p')->first());
    }

    public function testNew(): void
    {
        $originalNumObjectsInRepository = count($this->repository->findAll());

        $this->markTestIncomplete();
        $this->client->request('GET', sprintf('%snew', $this->path));

        self::assertResponseStatusCodeSame(200);

        $this->client->submitForm('Save', [
            'ticket_paiement[SecureKey]' => 'Testing',
            'ticket_paiement[TotalPaidTTC]' => 'Testing',
            'ticket_paiement[InvoiceNumber]' => 'Testing',
            'ticket_paiement[Discount]' => 'Testing',
            'ticket_paiement[NameProduct]' => 'Testing',
            'ticket_paiement[Customer]' => 'Testing',
        ]);

        self::assertResponseRedirects('/admin/ticket/paiement/c/r/u/d/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new TicketPaiement();
        $fixture->setSecureKey('My Title');
        $fixture->setTotalPaidTTC('My Title');
        $fixture->setInvoiceNumber('My Title');
        $fixture->setDiscount('My Title');
        $fixture->setNameProduct('My Title');
        $fixture->setCustomer('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TicketPaiement');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new TicketPaiement();
        $fixture->setSecureKey('My Title');
        $fixture->setTotalPaidTTC('My Title');
        $fixture->setInvoiceNumber('My Title');
        $fixture->setDiscount('My Title');
        $fixture->setNameProduct('My Title');
        $fixture->setCustomer('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'ticket_paiement[SecureKey]' => 'Something New',
            'ticket_paiement[TotalPaidTTC]' => 'Something New',
            'ticket_paiement[InvoiceNumber]' => 'Something New',
            'ticket_paiement[Discount]' => 'Something New',
            'ticket_paiement[NameProduct]' => 'Something New',
            'ticket_paiement[Customer]' => 'Something New',
        ]);

        self::assertResponseRedirects('/admin/ticket/paiement/c/r/u/d/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getSecureKey());
        self::assertSame('Something New', $fixture[0]->getTotalPaidTTC());
        self::assertSame('Something New', $fixture[0]->getInvoiceNumber());
        self::assertSame('Something New', $fixture[0]->getDiscount());
        self::assertSame('Something New', $fixture[0]->getNameProduct());
        self::assertSame('Something New', $fixture[0]->getCustomer());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new TicketPaiement();
        $fixture->setSecureKey('My Title');
        $fixture->setTotalPaidTTC('My Title');
        $fixture->setInvoiceNumber('My Title');
        $fixture->setDiscount('My Title');
        $fixture->setNameProduct('My Title');
        $fixture->setCustomer('My Title');

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/admin/ticket/paiement/c/r/u/d/');
    }
}
