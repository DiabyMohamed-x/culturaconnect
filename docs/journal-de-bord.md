# Journal de bord

## 07/07 (mardi)
Tranché hébergement (aucun, démo locale) et JS vanilla. Créé le squelette de la page d'accueil : header + nav mobile (burger), section hero, grille d'événements (stub, fetch réel prévu S3), CTA, footer. CSS mobile-first avec breakpoints 640px/768px.

## 08/07 (mercredi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : commencer le contenu réel de `events.json` (2-3 événements factices) pour sortir la grille d'accueil du stub.

## 09/07 (jeudi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : brancher `events.js` sur un vrai `fetch()` du JSON local, gérer l'état de chargement et le cas liste vide.

## 10/07 (vendredi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : ébaucher les pages internes (événements, détail événement, contact, à propos, proposer) pour avoir une structure HTML à remplir plutôt que des fichiers vides.

## 11-12/07 (week-end)
Pas de travail.

## 13/07 (lundi)
Le formulaire de contact/proposition (champs, labels) avant de s'attaquer à la validation JS.

## 14/07 (mardi)
Reprise après une semaine d'arrêt. Ajout des pages internes (`apropos.html`, `evenements.html`, `evenement.html`, `contact.html`, `proposer.html`) et de la validation de formulaire côté client (`forms.js`). Complété le CSS avec les styles pour pages internes et formulaires (`page-header`, `content-block`, `.form-group`, `.form-feedback`). Corrigé aussi le footer de l'accueil pour qu'il reste collé en bas de l'écran (footer + CTA en sticky footer) quand le contenu est court. Également travaillé sur la rédaction du JSON : `events.json` contient maintenant 3 événements factices (id, titre, date, lieu, description).

## 15/07 (mercredi)
Ajout du cahier des charges (`docs/cahier-des-charges.md`) : contexte, public cible, fonctionnalités, contraintes techniques avec justification du choix du framework (vanilla) et des limites assumées du stockage JSON (pas d'indexation, pas de recherche optimisée, risque d'écriture concurrente).

## 16/07 (jeudi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : commencer l'outil de supervision Python (`monitor.py`), au moins le check HTTP de base.

## 17/07 (vendredi)
Ajout de l'outil de supervision (`supervision/monitor.py`) : vérifie la disponibilité du site (code HTTP), le temps de réponse, l'espace disque et la mémoire, avec seuils d'alerte. Testé en conditions réelles contre le site en local : a immédiatement détecté une vraie alerte disque (94% utilisé, 5 Go libres). Nettoyage effectué (cache pip, conteneurs/build cache Docker inutilisés, caches applicatifs) : passage à 88% utilisé, 9,2 Go libres.

## 18-19/07 (week-end)
Pas de travail.

## 20/07 (lundi)
Ajout des scripts d'exploitation (`scripts/backup.sh`, `scripts/restore.sh`) + `.gitignore` (exclusion de `backups/`). Testé de bout en bout : sauvegarde du site en `.tar.gz`, suppression du dossier `site/`, restauration depuis l'archive — contenu identique retrouvé. Le message `tar: Suppression de « ../ »` lors de la sauvegarde est un simple avertissement de nettoyage de chemin relatif, pas une erreur.

## 21/07 (mardi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : brancher `events.js` sur un vrai `fetch()` au lieu du stub, pour préparer l'ajout des deux nouveaux événements.

## 22/07 (mercredi)
Affichage dynamique des événements : `events.js` fait maintenant un vrai `fetch()` de `data/events.json`, utilisé sur 3 pages (aperçu accueil, liste complète `evenements.html`, détail `evenement.html?id=...`). Deux événements ajoutés au JSON (concert jazz en plein air, ciné-club de quartier), 4 au total. Testé de bout en bout : liste triée par date et page détail vérifiées visuellement en local.
