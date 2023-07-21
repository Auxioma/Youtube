<?php

namespace App\Controller;

use App\Repository\ArticleBlogRepository;
use App\Repository\CategoryBlogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{

    #[Route('/blog/{Slug}/{id}', name: 'app_blog_show_article')]
    public function ShowArticle(ArticleBlogRepository $article, CategoryBlogRepository $categorie, $Slug, $id): Response
    {
        return $this->render('blog/article.html.twig', [
            'article' => $article->findOneBy(['Slug' => $id]),
            'categories' => $categorie->findBy(['IsVerified' => true], ['id' => 'ASC'])
        ]);
    }

    #[Route('/blog/{Slug}', name: 'app_blog_show')]
    public function Show(ArticleBlogRepository $article, CategoryBlogRepository $categorie, $Slug): Response
    {
        return $this->render('blog/index.html.twig', [
            'articles' => $article->findBy(['Categorie' => $categorie->findOneBy(['Slug' => $Slug])]),
            'categories' => $categorie->findBy(['IsVerified' => true], ['id' => 'ASC'])
        ]);
    }

    #[Route('/blog', name: 'app_blog')]
    public function index(ArticleBlogRepository $article, CategoryBlogRepository $categorie): Response
    {
        return $this->render('blog/index.html.twig', [
            'articles' => $article->findAll(),
            'categories' => $categorie->findBy(['IsVerified' => true], ['id' => 'ASC'])
        ]);
    }
    
}
