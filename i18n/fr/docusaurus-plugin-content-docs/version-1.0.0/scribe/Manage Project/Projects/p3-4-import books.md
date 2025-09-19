---
id: p3-4-importbooks
sidebar_label: Importer des livres
title: Importer des livres
---

### Importer des livres ###

Les utilisateurs peuvent importer des livres dans un projet au format **USFM** (.usfm ou .sfm). Cette fonctionnalité permet aux traducteurs d'intégrer facilement des fichiers de livres préparés ou mis à jour en externe à un projet existant ou nouveau.

## Créer un projet et importer des livres ##

Étapes pour [créer un projet](../../Manage%20Project/Create%20a%20Project/p2-1-new%20project.md)

- Cliquez sur **Créer un projet**.
- Cliquez sur **Importer des livres**.
- Sélectionnez les livres à importer.
- Cliquez sur **Créer un projet** pour finaliser.

## Importer des livres dans un projet existant ##

- Ouvrez la **Liste des projets**.
- Sélectionnez le projet dans lequel vous souhaitez importer des livres.
- Cliquez sur le **menu à trois points (⋮)** à côté du projet.
- Choisissez **Modifier le projet**.
- Dans la **fenêtre d'édition**, cliquez sur **Importer des livres**.
- Sélectionnez des fichiers USFM valides (.usfm / .sfm) inclus dans le projet sur votre appareil local.
- Cliquez sur **Importer**.
- Si les livres sélectionnés existent déjà :
  - Cliquez sur **Écraser** pour les remplacer, ou
  - Cliquez sur **Annuler** pour conserver les livres existants.
- Vérifiez que les livres sont importés et que le projet est mis à jour.
- Cliquez sur **Enregistrer** pour confirmer les modifications.

<video controls src="/1.0.0/en_importbooks.mp4" width="100%" type="video/mov"/>

## Codes couleur pour les livres importés ##

Après avoir cliqué sur Importer, le système valide chaque fichier sélectionné et attribue un code couleur pour indiquer son statut :

1. **<img src="/1.0.0/red.png" width="15px" alt=""/> Rouge** – **Fichier non valide** : Le fichier est corrompu, vide ou n’est pas au format USFM requis ; il ne peut pas être importé.
2. **<img src="/1.0.0/grey.png" width="15px" alt=""/> Gris** – **Hors du périmètre** : Le fichier n’appartient pas au périmètre du projet sélectionné.
3. **<img src="/1.0.0/green.png" width="15px" alt=""/> Vert** – **Livre valide** : Le fichier est dans le périmètre et peut être importé avec succès.
4. **<img src="/1.0.0/blue.png" width="15px" alt=""/> Bleu** – **Doublure détectée** : Le livre a été sélectionné plusieurs fois ou est déjà inclus dans le lot et ne peut pas être réimporté.

Ce système de codage couleur permet aux utilisateurs d'identifier rapidement les fichiers prêts à être importés, nécessitant une action ou ne pouvant pas être traités.

<img src="/1.0.0/en_importbook.png" width="1000px" alt=""/>