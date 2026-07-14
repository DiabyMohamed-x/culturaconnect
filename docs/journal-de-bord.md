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
Pas de travail prévu ces jours-là.

## 13/07 (lundi)
Délaissé — aucune avancée. Ce qui aurait pu être fait : poser le formulaire de contact/proposition (champs, labels) avant de s'attaquer à la validation JS.

## 14/07 (mardi)
Reprise après une semaine d'arrêt. Ajout des pages internes (`apropos.html`, `evenements.html`, `evenement.html`, `contact.html`, `proposer.html`) et de la validation de formulaire côté client (`forms.js`). Complété le CSS avec les styles pour pages internes et formulaires (`page-header`, `content-block`, `.form-group`, `.form-feedback`). Corrigé aussi le footer de l'accueil pour qu'il reste collé en bas de l'écran (footer + CTA en sticky footer) quand le contenu est court.
