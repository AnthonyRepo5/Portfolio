<?php

namespace App\Controller\UserApp;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Tarif;
use App\Entity\Utilisateur;
use App\Entity\Appareil;
use App\Entity\Reparation;
use App\Entity\Devis;
use App\Repository\AppareilRepository;
use Symfony\Component\HttpFoundation\Session\SessionInterface;



class DevisController extends AbstractController
{
    #[Route('/devis', name: 'app_devis', methods: ['POST'])]
    public function showDevisForm(Request $request, EntityManagerInterface $entityManager, SessionInterface $session): Response
    {
        $postData = $request->request->all();
        $tarifIds = $postData['tarifIds'] ?? [];

        $session->set('tarifIds', $tarifIds);
    
        $tarifs = [];

        foreach ($tarifIds as $tarifId) {
            $tarif = $entityManager->getRepository(Tarif::class)->find($tarifId);
            if ($tarif) {
                $tarifs[] = $tarif;
            }
        }
    
        return $this->render('user_app/devis.html.twig', [
            'tarifs' => $tarifs,
        ]);
    }

    #[Route('/devis', name: 'app_devis_redirect', methods: ['GET'])]
    public function showForm(SessionInterface $session, EntityManagerInterface $entityManager): Response
    {
        $tarifIds = $session->get('tarifIds', []);

        $tarifs = [];
        foreach ($tarifIds as $tarifId) {
            $tarif = $entityManager->getRepository(Tarif::class)->find($tarifId);
            if ($tarif) {
                $tarifs[] = $tarif;
            }
        }
    
        return $this->render('user_app/devis.html.twig', [
            'tarifs' => $tarifs,
        ]);
    }
    
    

    #[Route('/create-devis', name: 'app_create_devis', methods: ['POST'])]
    public function createDevis(Request $request, EntityManagerInterface $entityManager, AppareilRepository $appareilRepository): Response
    {
        $user = $this->getUser();

        $codeImei = $request->request->get('codeImei', 'AJOUTER IMEI PAR ADMIN');
        $numSerie = $request->request->get('numSerie', 'AJOUTER NUMERO SERIE PAR ADMIN');

        $postData = $request->request->all();
        $tarifIds = $postData['tarifIds'] ?? [];

        if (empty($tarifIds)) {
            $this->addFlash('error', 'Veuillez sélectionner au moins une panne.');
            return $this->redirectToRoute('app_devis');
        }

        $lastDevis = $entityManager->getRepository(Devis::class)->findOneBy([], ['idDevis' => 'DESC']);
        $numDevis = $lastDevis ? 'DEV' . str_pad((substr($lastDevis->getNumDevis(), 3) + 1), 3, '0', STR_PAD_LEFT) : 'DEV001';

        foreach ($tarifIds as $tarifId) {
            $tarif = $entityManager->getRepository(Tarif::class)->find($tarifId);

            if ($tarif) {
                $modele = $tarif->getIdModele();
                $marque = $modele->getIdMarque();
                $typeAppareils = $marque->getidTypeAppareils();

                if (!$typeAppareils->isEmpty()) {
                    $typeAppareil = $typeAppareils->first();

                    $appareil = $appareilRepository->findOneBy([
                        'idUtilisateur' => $user,
                        'idModele' => $modele,
                        'idTypeAppareil' => $typeAppareil,
                        'codeImei' => $codeImei,
                        'numSerie' => $numSerie,
                    ]);
                }

                if (!$appareil) {
                    $appareil = new Appareil();
                    $appareil->setCodeImei($codeImei)
                            ->setNumSerie($numSerie)
                            ->setDateCreationAppareil(new \DateTime())
                            ->setIdUtilisateur($user)
                            ->setIdModele($modele)
                            ->setIdTypeAppareil($typeAppareil);
                    $entityManager->persist($appareil);
                }

                if ($appareil) {
                    $typePanne = $tarif->getIdPanne();
                    $reparation = new Reparation();
                    $reparation->setObservation($typePanne->getLibPanne())
                            ->setDateDemande(new \DateTime())
                            ->setDateMajDemande(new \DateTime())
                            ->setIdPanne($typePanne)
                            ->setIdAppareil($appareil)
                            ->setIdUtilisateur($user);
                    $entityManager->persist($reparation);
                }

                if ($reparation) {
                    $devis = new Devis();
                    $devis->setNumDevis($numDevis)
                        ->setDateDevis(new \DateTime())
                        ->setPrixTtc($tarif->getMontant())
                        ->setCommentaireDevis($tarif->getIdPanne()->getLibPanne())
                        ->setDateRestitution(new \DateTime('+1 week'))
                        ->setStatut(0)
                        ->setDateMajDevis(new \DateTime())
                        ->setIdReparation($reparation)
                        ->setIdUtilisateur($user);
                    $entityManager->persist($devis);
                }
                
                $entityManager->flush();
            }
        }
        
        return $this->redirectToRoute('app_user-dashboard');
    }
}
