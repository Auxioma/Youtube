<?php

namespace App\Repository;

use App\Entity\SpecialiteVoyance;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SpecialiteVoyance>
 *
 * @method SpecialiteVoyance|null find($id, $lockMode = null, $lockVersion = null)
 * @method SpecialiteVoyance|null findOneBy(array $criteria, array $orderBy = null)
 * @method SpecialiteVoyance[]    findAll()
 * @method SpecialiteVoyance[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SpecialiteVoyanceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SpecialiteVoyance::class);
    }

//    /**
//     * @return SpecialiteVoyance[] Returns an array of SpecialiteVoyance objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?SpecialiteVoyance
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
