<?php

namespace App\Repository;

use App\Entity\ModeDeConsultation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ModeDeConsultation>
 *
 * @method ModeDeConsultation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ModeDeConsultation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ModeDeConsultation[]    findAll()
 * @method ModeDeConsultation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ModeDeConsultationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ModeDeConsultation::class);
    }

//    /**
//     * @return ModeDeConsultation[] Returns an array of ModeDeConsultation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ModeDeConsultation
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
