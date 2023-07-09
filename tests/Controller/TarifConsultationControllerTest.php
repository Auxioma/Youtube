<?php

namespace App\Test\Controller;

use App\Entity\TarifConsultation;
use App\Repository\TarifConsultationRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TarifConsultationControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private TarifConsultationRepository $repository;
    private string $path = '/admin/tarif/consultation/c/r/u/d/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(TarifConsultation::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TarifConsultation index');

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
            'tarif_consultation[Name]' => 'Testing',
            'tarif_consultation[Description]' => 'Testing',
            'tarif_consultation[ModeDeConsultation]' => 'Testing',
            'tarif_consultation[Price]' => 'Testing',
            'tarif_consultation[User]' => 'Testing',
        ]);

        self::assertResponseRedirects('/admin/tarif/consultation/c/r/u/d/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new TarifConsultation();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setModeDeConsultation('My Title');
        $fixture->setPrice('My Title');
        $fixture->setUser('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('TarifConsultation');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new TarifConsultation();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setModeDeConsultation('My Title');
        $fixture->setPrice('My Title');
        $fixture->setUser('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'tarif_consultation[Name]' => 'Something New',
            'tarif_consultation[Description]' => 'Something New',
            'tarif_consultation[ModeDeConsultation]' => 'Something New',
            'tarif_consultation[Price]' => 'Something New',
            'tarif_consultation[User]' => 'Something New',
        ]);

        self::assertResponseRedirects('/admin/tarif/consultation/c/r/u/d/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getName());
        self::assertSame('Something New', $fixture[0]->getDescription());
        self::assertSame('Something New', $fixture[0]->getModeDeConsultation());
        self::assertSame('Something New', $fixture[0]->getPrice());
        self::assertSame('Something New', $fixture[0]->getUser());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new TarifConsultation();
        $fixture->setName('My Title');
        $fixture->setDescription('My Title');
        $fixture->setModeDeConsultation('My Title');
        $fixture->setPrice('My Title');
        $fixture->setUser('My Title');

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/admin/tarif/consultation/c/r/u/d/');
    }
}
