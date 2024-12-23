<?php

namespace App\Repository;

use App\Entity\BonusProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<BonusProduct>
 *
 * @method BonusProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method BonusProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method BonusProduct[]    findAll()
 * @method BonusProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BonusProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BonusProduct::class);
    }

//    /**
//     * @return BonusProduct[] Returns an array of BonusProduct objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('b.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?BonusProduct
//    {
//        return $this->createQueryBuilder('b')
//            ->andWhere('b.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
