<?php

namespace App\Form;

use App\Entity\Profile;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Vich\UploaderBundle\Form\Type\VichImageType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\CountryType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Pseudo', TextType::class, [
                'attr' => [
                    'placeholder' => 'Pseudo',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Nom de Facturation',
                    ]),
                ],
            ])
            ->add('Nom', TextType::class, [
                'attr' => [
                    'placeholder' => 'Nom (Non visible de vos experts)',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre nom est obligatoire',
                    ]),
                ],
            ])
            ->add('DateDeNaissance', DateType::class, [
                'label' => false,
                'widget' => 'single_text',
                'html5' => false,   
                'format' => 'dd-MM-YYYY',
                'attr' => [
                    'placeholder' => 'Date de naissance (JJ-MM-AAAA)',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre date de naissance est obligatoire',
                    ]),
                ],
            ])
            ->add('NumeroTelephone', NumberType::class, [
                'attr' => [
                    'placeholder' => 'Numéro de téléphone',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre numéro de téléphone est obligatoire',
                    ]),
                ],
            ])
            ->add('Adresse', TextType::class, [
                'attr' => [
                    'placeholder' => 'Adresse',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre adresse est obligatoire',
                    ]),
                ],
            ])
            ->add('CodePostal', NumberType::class, [
                'attr' => [
                    'placeholder' => 'Code postal',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre code postal est obligatoire',
                    ]),
                ],
            ])
            ->add('Ville', TextType::class, [
                'attr' => [
                    'placeholder' => 'Ville',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre ville est obligatoire',
                    ]),
                ],
            ])
            ->add('Pays', CountryType::class, [
                'attr' => [
                    'placeholder' => 'Pays',
                    'class' => 'form-control',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre pays est obligatoire',
                    ]),
                ],
            ])
            ->add('OptIn', CheckboxType::class, [
                'label' => 'Je souhaite recevoir des offres promotionnelles de la part de la société',
                'required' => false,
                'attr' => [
                    'class' => 'form-check-input',
                ],
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Profile::class,
        ]);
    }
}
