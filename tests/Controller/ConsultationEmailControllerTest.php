<?php

namespace App\Test\Controller;

use App\Entity\ConsultationEmail;
use App\Repository\ConsultationEmailRepository;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ConsultationEmailControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private ConsultationEmailRepository $repository;
    private string $path = '/admin/consultation/email/';

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(ConsultationEmail::class);

        foreach ($this->repository->findAll() as $object) {
            $this->repository->remove($object, true);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ConsultationEmail index');

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
            'consultation_email[Message]' => 'Testing',
            'consultation_email[CreatedAt]' => 'Testing',
            'consultation_email[User]' => 'Testing',
            'consultation_email[Reponse]' => 'Testing',
        ]);

        self::assertResponseRedirects('/admin/consultation/email/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new ConsultationEmail();
        $fixture->setMessage('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setReponse('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ConsultationEmail');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new ConsultationEmail();
        $fixture->setMessage('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setReponse('My Title');

        $this->repository->save($fixture, true);

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'consultation_email[Message]' => 'Something New',
            'consultation_email[CreatedAt]' => 'Something New',
            'consultation_email[User]' => 'Something New',
            'consultation_email[Reponse]' => 'Something New',
        ]);

        self::assertResponseRedirects('/admin/consultation/email/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getMessage());
        self::assertSame('Something New', $fixture[0]->getCreatedAt());
        self::assertSame('Something New', $fixture[0]->getUser());
        self::assertSame('Something New', $fixture[0]->getReponse());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new ConsultationEmail();
        $fixture->setMessage('My Title');
        $fixture->setCreatedAt('My Title');
        $fixture->setUser('My Title');
        $fixture->setReponse('My Title');

        $this->repository->save($fixture, true);

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/admin/consultation/email/');
    }
}
