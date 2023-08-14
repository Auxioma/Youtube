<?php

namespace App\Form;

use App\Entity\Profile;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class Profile1Type extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Pseudo')
            ->add('Nom')
            ->add('DateDeNaissance', DateType::class, [
                'label' => false,
                'widget' => 'single_text',
                'html5' => false,   
                'format' => 'dd-MM-YYYY',
                'attr' => [
                    'placeholder' => 'Date de naissance (JJ-MM-AAAA)',
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre date de naissance est obligatoire',
                    ]),
                ],
            ])
            ->add('NumeroTelephone')
            ->add('Adresse')
            ->add('CodePostal')
            ->add('Ville')
            ->add('Pays')
            ->add('OptIn')
            ->add('imageName')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Profile::class,
        ]);
    }
}
