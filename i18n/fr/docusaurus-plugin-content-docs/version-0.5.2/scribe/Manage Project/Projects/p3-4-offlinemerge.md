---
id: p3-4-offlinemerge
sidebar_label: Fusion hors ligne
title: Fusion hors ligne
---
Visitez la page Importer un projet pour plus d’informations sur la façon d’importer un projet.

La fusion hors ligne fait référence au processus de fusion des modifications d'un traducteur à un autre travaillant sur le même projet. Il permet aux traducteurs d'apporter des modifications et d'effectuer des opérations de fusion sur leurs systèmes locaux. Cette fonctionnalité peut être utilisée avec plusieurs traducteurs. Lorsque plusieurs utilisateurs travaillent sur le même projet, des conflits peuvent survenir lors de la fusion. Cette page permet aux utilisateurs d'examiner les modifications conflictuelles, de décider comment les résoudre, puis de les fusionner si nécessaire.

### Étapes pour fusionner hors ligne ###

- Cliquez sur **Importer** <img src="/0.5.2/fr-import.png" width="80px" alt=""/> dans le coin supérieur droit de la page des projets
- Choisissez le dossier souhaité pour l'importation et cliquez sur Sélectionner un dossier/Ouvrir
- La boîte de dialogue IMPORTER UN PROJET apparaîtra et affichera les détails du projet, tels que le répertoire Scripture -Burrito, le nom du projet et de la langue et le type de projet.
<img src="/assets/importdialoge.PNG" width="100%" alt=""/>
- Pour confirmer l'importation, cliquez sur le bouton IMPORTER <img src="/assets/import03.PNG" width="80px" alt=""/>
- Une boîte de dialogue Remplacer la ressource s'ouvrira avec les options Remplacer et Fusionner (uniquement pour OBS)
<img src="/assets/replaceandmerge01.PNG" width="100%" alt=""/>
- Si Remplacer est choisi, l'ensemble du projet est remplacé par le contenu entrant
- Si l'utilisateur sélectionne l'option Fusionner
- Il traitera l'opération de fusion du projet
- Si aucun conflit n'est détecté, l'utilisateur sera redirigé vers la page de liste des projets avec le projet mis à jour.
- S'il y a un conflit dans le projet
- L'utilisateur sera redirigé vers le volet Résoudre les conflits
<img src="/0.5.2/resolve.PNG" width="100%" alt=""/>
- Supposons que l'utilisateur décide d'abandonner l'action Résoudre le conflit. Cliquez sur le symbole de fermeture (x) dans le coin supérieur droit. Cela fera apparaître une fenêtre d'abandon de la résolution du conflit.
<video controls src="/0.5.2/replaceandmerge.mov" width="100%" type="video/mov"></video>

### Étapes pour résoudre les conflits ###

**La page Résoudre les conflits s'affiche lorsqu'un utilisateur sélectionne l'option Fusionner.**
- Une liste de fichiers avec des conflits apparaît dans la partie gauche du volet
<img src="/0.5.2/resolve.PNG" width="100%" alt=""/>
- Les sections/paras individuels peuvent être vus dans le volet de l'éditeur. Les conflits s'afficheront avec **Originale** en noire et **Nouvelle** en vert.
- Sélectionnez l'une des options proposées au-dessus de la section pour confirmer ( <img src="/0.5.2/fr-conflicts.PNG" width="20%" alt=""/>)
  - **Originale** (l'utilisateur l'a déjà dans le projet)
  - **Nouvelle** (ce que nous obtenons du projet importé)
  - **Les deux** (combine originale et nouvelle)
- Si l'utilisateur décide d'annuler l'action, cliquez sur Réinitialiser au-dessus de la section individuelle.
**En haut à droite, il y a des choix pour résoudre les conflits globaux pour le fichier actif (ex : 1.md, pour le fichier concurrent)**

- **Originale** (tous les conflits seront résolus avec notre changement)
- **Nouvelle** (tous les conflits seront résolus avec leur changement)
- **Les deux** (combine originale et nouvelle)
- Après avoir résolu tous les conflits, le bouton **Réinitialiser tout** sera activé pour réinitialiser les modifications actuelles à l'état initial.
- Une fois tous les conflits résolus
- Cliquez sur le bouton **Enregistrer**
- Dans la partie gauche du volet, le fichier résolu est marqué barré, indiquant qu'il a été résolu.
- Une fois tous les conflits résolus, un bouton **apparaîtra indiquant Tous les conflits résolus : Terminer, cliquez pour terminer le processus**

<video controls src="/0.5.2/conflictresolve.mov" width="100%" type="video/mov"></video>