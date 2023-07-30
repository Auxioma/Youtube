<?php

namespace App\Controller\Admin;

use App\Entity\ArticleBlog;
use App\Form\ArticleBlogType;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\ArticleBlogRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/admin/article/blog')]
#[IsGranted('ROLE_ADMIN', message: 'Vous devez vous connecter pour accéder à cette page', statusCode: 404, exceptionCode: '404')]
class ArticleBlogController extends AbstractController
{
    #[Route('/', name: 'app_admin_article_blog_index', methods: ['GET'])]
    public function index(ArticleBlogRepository $articleBlogRepository): Response
    {
        return $this->render('admin/article_blog/index.html.twig', [
            'article_blogs' => $articleBlogRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_article_blog_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $articleBlog = new ArticleBlog();
        $form = $this->createForm(ArticleBlogType::class, $articleBlog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($articleBlog);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_article_blog_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/article_blog/new.html.twig', [
            'article_blog' => $articleBlog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_article_blog_show', methods: ['GET'])]
    public function show(ArticleBlog $articleBlog): Response
    {
        return $this->render('admin/article_blog/show.html.twig', [
            'article_blog' => $articleBlog,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_article_blog_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ArticleBlog $articleBlog, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ArticleBlogType::class, $articleBlog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_article_blog_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/article_blog/edit.html.twig', [
            'article_blog' => $articleBlog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_article_blog_delete', methods: ['POST'])]
    public function delete(Request $request, ArticleBlog $articleBlog, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$articleBlog->getId(), $request->request->get('_token'))) {
            $entityManager->remove($articleBlog);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_article_blog_index', [], Response::HTTP_SEE_OTHER);
    }
}
