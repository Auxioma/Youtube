<?php

namespace App\EventSubscriber;

use App\Entity\Slider;
use DateTimeImmutable;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;

class AdminSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setCreatedAt'],
            BeforeEntityUpdatedEvent::class => ['setUpdatedAt']

        ];
    }

    public function SetCreatedAt(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();
        if(!$entity instanceof Slider) return;
        $entity->setCreatedAt(new DateTimeImmutable());
    }

    public function SetUpdatedAt(BeforeEntityUpdatedEvent $event)
    {
        $entity = $event->getEntityInstance();
        if(!$entity instanceof Slider) return;
        $entity->setUpdatedAt(new DateTimeImmutable());
    }
}
