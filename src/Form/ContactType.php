<?php

namespace App\Form;

use App\Entity\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Nom', TextType::class, [
                'attr' => [
                    'placeholder' => 'Nom',
                    'class' => 'form-control style-white'
                ]
            ])
            ->add('Email', EmailType::class, [
                'attr' => [
                    'placeholder' => 'Email',
                    'class' => 'form-control style-white'
                ]
            ])
            ->add('Sujet', TextType::class, [
                'attr' => [
                    'placeholder' => 'Sujet',
                    'class' => 'form-control style-white'
                ]
            ])
            ->add('Message', TextareaType::class, [
                'attr' => [
                    'placeholder' => 'Message',
                    'class' => 'form-control style-white'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}