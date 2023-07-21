<?php

namespace App\Form;

use App\Entity\ArticleBlog;
use Symfony\Component\Form\AbstractType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Vich\UploaderBundle\Form\Type\VichFileType;

class ArticleBlogType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Categorie')
            ->add('Article', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'Article'
                ]
            ])
            ->add('Slug', TextType::class, [
                'attr' => [
                    'placeholder' => 'Slug'
                ]
            ])
            ->add('Titre', TextType::class, [
                'attr' => [
                    'placeholder' => 'Titre de l\'article'
                ]
            ])
           
            ->add('LongDescription', CKEditorType::class, [
                'attr' => [
                    'placeholder' => 'Description longue'
                ]
            ])
            ->add('imageFile', VichFileType::class, [
                'required' => false,
                'attr' => [
                    'placeholder' => 'Image'
                ]
            ])
            ->add('IsActive')
            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ArticleBlog::class,
        ]);
    }
}
