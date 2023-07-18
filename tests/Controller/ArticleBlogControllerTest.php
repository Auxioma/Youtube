<?php

namespace App\Test\Controller;

use App\Entity\ArticleBlog;
use App\Repository\ArticleBlogRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ArticleBlogControllerTest extends WebTestCase
{
    private KernelBrowser $client;
    private ArticleBlogRepository $repository;
    private string $path = '/admin/article/blog/';
    private EntityManagerInterface $manager;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->repository = static::getContainer()->get('doctrine')->getRepository(ArticleBlog::class);

        foreach ($this->repository->findAll() as $object) {
            $this->manager->remove($object);
        }
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', $this->path);

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ArticleBlog index');

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
            'article_blog[Article]' => 'Testing',
            'article_blog[Slug]' => 'Testing',
            'article_blog[Categorie]' => 'Testing',
        ]);

        self::assertResponseRedirects('/admin/article/blog/');

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));
    }

    public function testShow(): void
    {
        $this->markTestIncomplete();
        $fixture = new ArticleBlog();
        $fixture->setArticle('My Title');
        $fixture->setSlug('My Title');
        $fixture->setCategorie('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));

        self::assertResponseStatusCodeSame(200);
        self::assertPageTitleContains('ArticleBlog');

        // Use assertions to check that the properties are properly displayed.
    }

    public function testEdit(): void
    {
        $this->markTestIncomplete();
        $fixture = new ArticleBlog();
        $fixture->setArticle('My Title');
        $fixture->setSlug('My Title');
        $fixture->setCategorie('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        $this->client->request('GET', sprintf('%s%s/edit', $this->path, $fixture->getId()));

        $this->client->submitForm('Update', [
            'article_blog[Article]' => 'Something New',
            'article_blog[Slug]' => 'Something New',
            'article_blog[Categorie]' => 'Something New',
        ]);

        self::assertResponseRedirects('/admin/article/blog/');

        $fixture = $this->repository->findAll();

        self::assertSame('Something New', $fixture[0]->getArticle());
        self::assertSame('Something New', $fixture[0]->getSlug());
        self::assertSame('Something New', $fixture[0]->getCategorie());
    }

    public function testRemove(): void
    {
        $this->markTestIncomplete();

        $originalNumObjectsInRepository = count($this->repository->findAll());

        $fixture = new ArticleBlog();
        $fixture->setArticle('My Title');
        $fixture->setSlug('My Title');
        $fixture->setCategorie('My Title');

        $this->manager->persist($fixture);
        $this->manager->flush();

        self::assertSame($originalNumObjectsInRepository + 1, count($this->repository->findAll()));

        $this->client->request('GET', sprintf('%s%s', $this->path, $fixture->getId()));
        $this->client->submitForm('Delete');

        self::assertSame($originalNumObjectsInRepository, count($this->repository->findAll()));
        self::assertResponseRedirects('/admin/article/blog/');
    }
}
