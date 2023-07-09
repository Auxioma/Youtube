<?php

namespace App\Repository;

use App\Entity\SoldeCompteClient;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<SoldeCompteClient>
 *
 * @method SoldeCompteClient|null find($id, $lockMode = null, $lockVersion = null)
 * @method SoldeCompteClient|null findOneBy(array $criteria, array $orderBy = null)
 * @method SoldeCompteClient[]    findAll()
 * @method SoldeCompteClient[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SoldeCompteClientRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, SoldeCompteClient::class);
    }

    public function save(SoldeCompteClient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(SoldeCompteClient $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return SoldeCompteClient[] Returns an array of SoldeCompteClient objects
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

//    public function findOneBySomeField($value): ?SoldeCompteClient
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
