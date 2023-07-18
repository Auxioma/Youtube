<?php

namespace App\Controller\Admin;

use App\Entity\CategoryBlog;
use App\Form\CategoryBlogType;
use App\Repository\CategoryBlogRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/category/blog')]
class CategoryBlogController extends AbstractController
{
    #[Route('/', name: 'app_admin_category_blog_index', methods: ['GET'])]
    public function index(CategoryBlogRepository $categoryBlogRepository): Response
    {
        return $this->render('admin/category_blog/index.html.twig', [
            'category_blogs' => $categoryBlogRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_category_blog_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $categoryBlog = new CategoryBlog();
        $form = $this->createForm(CategoryBlogType::class, $categoryBlog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($categoryBlog);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_category_blog_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/category_blog/new.html.twig', [
            'category_blog' => $categoryBlog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_category_blog_show', methods: ['GET'])]
    public function show(CategoryBlog $categoryBlog): Response
    {
        return $this->render('admin/category_blog/show.html.twig', [
            'category_blog' => $categoryBlog,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_category_blog_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CategoryBlog $categoryBlog, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(CategoryBlogType::class, $categoryBlog);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_category_blog_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin/category_blog/edit.html.twig', [
            'category_blog' => $categoryBlog,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_category_blog_delete', methods: ['POST'])]
    public function delete(Request $request, CategoryBlog $categoryBlog, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$categoryBlog->getId(), $request->request->get('_token'))) {
            $entityManager->remove($categoryBlog);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_category_blog_index', [], Response::HTTP_SEE_OTHER);
    }
}
