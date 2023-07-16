<?php

namespace App\Form;

use App\Entity\Slider;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SliderType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Title', TextType::class, [
                'attr' => [
                    'placeholder' => 'Title',
                ],
            ])
            ->add('Description', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'Description',
                ],
            ])
            ->add('Slug', TextType::class, [
                'attr' => [
                    'placeholder' => 'Slug',
                ],
            ])
            ->add('NameSlug', TextType::class, [
                'attr' => [
                    'placeholder' => 'NameSlug',
                ],
            ])
            ->add('IsActive', CheckboxType::class, [
                'attr' => [
                    'placeholder' => 'IsActive',
                ],
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => true,
                'allow_delete' => true,
                'delete_label' => 'Supprimer l\'image ?',
                'download_label' => 'Télécharger l\'image',
                'download_uri' => true,
                'image_uri' => true,
                'asset_helper' => true,
                'attr' => [
                    'placeholder' => 'Image',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Slider::class,
        ]);
    }
}
