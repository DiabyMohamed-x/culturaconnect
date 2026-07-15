# Cahier des charges — CulturaConnect

## 1. Présentation du projet, contexte et problématique

CulturaConnect est une association culturelle fictive qui organise des événements
(expositions, concerts, ateliers) ouverts au public. Elle ne dispose d'aucune équipe
informatique interne et souhaite néanmoins :

- présenter ses activités et ses événements sur un site web ;
- pouvoir déployer et exploiter ce site facilement, sans compétences techniques
  poussées en interne ;
- disposer d'un minimum d'outils de supervision pour être alertée en cas de problème.

Ce projet vise à répondre à ce besoin en produisant un site vitrine simple, un outil de
supervision, et des scripts d'exploitation basiques, avec une documentation permettant
à une personne non technique de comprendre et faire fonctionner l'ensemble.

Ce projet est réalisé dans le cadre d'un projet de substitution au stage, pour le DSP —
parcours DevOps. Il n'y a pas d'hébergement réel : le site est fictif et démontré en
local lors de la soutenance.

## 2. Public cible

- **Visiteurs / grand public** : consultent le site pour découvrir les événements à
  venir, en savoir plus sur l'association, proposer un événement ou contacter l'équipe.
- **Bénévoles / équipe de l'association** : mettent à jour les événements (via le
  fichier JSON) et consultent les résultats de supervision pour s'assurer que le site
  fonctionne correctement.

## 3. Fonctionnalités principales

### Site vitrine (6 pages)
- Page d'accueil (présentation rapide + aperçu des prochains événements)
- Présentation de l'association
- Liste des événements à venir
- Détail d'un événement
- Formulaire de contact
- Formulaire de proposition d'événement

### Gestion des données
- Les événements sont stockés dans un fichier `data/events.json`.
- Le JavaScript lit ce fichier et affiche les événements dynamiquement (pas de
  rechargement de page nécessaire pour ajouter/modifier un événement).

### Outil de supervision (Python)
- Vérifie la disponibilité du site (code HTTP)
- Mesure le temps de réponse
- Vérifie l'espace disque disponible
- Vérifie l'utilisation mémoire
- Affiche les résultats de manière claire (rapport lisible en console)

### Scripts d'exploitation
- Script de sauvegarde du site
- Script de restauration

## 4. Contraintes techniques

| Aspect | Choix retenu | Justification |
|---|---|---|
| Front-end | HTML / CSS / JavaScript **vanilla** (aucun framework) | Aucun framework n'a été vu en formation à ce stade ; pour un site statique de 6 pages, le vanilla suffit largement sans complexité ajoutée |
| Stockage des données | Fichier(s) JSON | Aucune base de données n'est imposée par le sujet. **Limite assumée** : moins performant qu'une vraie BDD (pas d'indexation, pas de recherche optimisée, risque de corruption du fichier en cas d'écriture concurrente), mais largement suffisant pour un volume d'événements réduit et statique |
| Supervision | Python | Imposé par le sujet |
| Scripts d'administration | Bash ou Python | Au choix, selon la tâche |
| Hébergement | Aucun — démonstration en local | Projet fictif, pas de mise en production réelle prévue |
| Gestion de version | Git / GitHub | Dépôt : `culturaconnect` |

## 5. Planning prévisionnel

| Tâche | Durée estimée |
|---|---|
| Analyse du besoin | 4 h |
| Rédaction du cahier des charges | 6 h |
| Conception technique (architecture, wireframes, schéma JSON) | 8 h |
| Développement front-end (6 pages + CSS responsive) | 20 h |
| Développement JS (affichage dynamique + formulaires) | 10 h |
| Développement de l'outil de supervision Python | 10 h |
| Développement des scripts d'exploitation | 6 h |
| Documentation (utilisateur + technique) | 8 h |
| Tests et corrections | 6 h |
| Rédaction du rapport de stage | 12 h |

**Charge totale estimée : 90 heures**

## 6. Organisation du travail

Projet réalisé en solo. Un seul rôle assumé, cumulant : développement front-end,
administration système, supervision, documentation.

## 7. Critères d'évaluation (rappel du sujet)

| Critère | Pondération |
|---|---|
| Site web | 30 % |
| Exploitation / administration | 20 % |
| Outil de supervision Python | 20 % |
| Documentation | 20 % |
| Journal de bord et gestion de projet | 10 % |
