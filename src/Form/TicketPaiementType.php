<?php

namespace App\Form;

use App\Entity\TicketPaiement;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TicketPaiementType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('SecureKey')
            ->add('TotalPaidTTC')
            ->add('InvoiceNumber')
            ->add('Discount')
            ->add('NameProduct')
            ->add('Customer')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TicketPaiement::class,
        ]);
    }
}
