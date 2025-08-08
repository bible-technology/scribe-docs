---
id: p3-4-offlinemerge
sidebar_label: Fusion hors ligne
title: Fusion hors ligne
---

:::note

La fonctionnalité **Fusion hors ligne** est applicable pour BT et OBS.


:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="Traduction de la Bible"
  values={[
    { label: 'Traduction de la Bible (BT)', value: 'Traduction de la Bible' },
    { label: 'Histoires de la Bible ouverte (OBS)', value: 'Histoires de la Bible ouverte' },
  ]}
>

<TabItem value="Traduction de la Bible">


La fonctionnalité de **fusion hors ligne** permet à plusieurs traducteurs de travailler indépendamment sur un même projet de traduction de la Bible et de fusionner ultérieurement leurs modifications en une version unifiée.

### Fonctionnalités principales

- Permet aux traducteurs de travailler hors ligne et de synchroniser les modifications ultérieurement.
- Favorise la collaboration entre plusieurs traducteurs sur un même projet.
- Facilite la gestion et la résolution des conflits pendant le processus de fusion.

### Étapes pour effectuer une fusion hors ligne

- Cliquez sur le bouton Importer sur la page Projets.
- Sélectionnez le dossier souhaité, puis cliquez sur Sélectionner/Ouvrir le dossier.
- La boîte de dialogue **Importer le projet** apparaît et affiche les détails du projet, tels que :
   - Répertoire Scripture Burrito
   - Nom du projet
   - Langue
   - Type de projet
- Pour confirmer, cliquez sur le bouton **Importer**.

<img src="/0.8.2/fr_offline merge image1.png" width="1000px" alt=""/>

### Options de la boîte de dialogue Remplacer les ressources

- Après l'importation d'un projet, une boîte de dialogue s'affiche avec trois options :
- **Remplacer** – Remplace complètement le projet existant par le nouveau.
- **Fusionner** – Combine le nouveau projet avec le projet existant.
    - En l'absence de conflit, le projet mis à jour apparaît dans la liste des projets.
    - En cas de conflit, l'écran de résolution des conflits s'affiche.
- **Annuler** – Ferme la boîte de dialogue sans apporter de modifications.

<img src="/0.8.2/fr_offline merge image2.png" width="1000px" alt=""/>


### Abandon de la résolution des conflits

Si l'utilisateur décide de ne pas poursuivre la résolution d'un conflit :

#### Étapes :

- Cliquez sur le bouton **Fermer (×)** en haut à droite.
- Une fenêtre contextuelle de confirmation d'abandon de la résolution des conflits s'affiche.
- Confirmez pour quitter sans enregistrer les modifications.

<video controls src="/0.8.2/en_conflictabort.mp4" width="100%" type="video/mov"/>

### Résolution des conflits individuels

- Chaque section en conflit s'affiche dans le volet d'édition.
- Le contenu **Original** (du projet actuel) apparaît en **noir**.
- Le contenu **Nouveau** (du projet importé) apparaît en **vert**.

#### Étapes :

- Au-dessus de chaque section, choisissez l'une des options suivantes :
- **Original** – Conserve le contenu existant.
- **Nouveau** – Remplace par le contenu du projet importé.
- Pour annuler une sélection, cliquez sur le bouton **Réinitialiser** au-dessus de la section.

<img src="/0.8.2/fr_offline merge image3.png" width="1000px" alt=""/>

### Gestion des conflits au niveau des chapitres

#### 1. Résoudre les conflits dans les sections
Examinez chaque conflit et choisissez **Original** ou **Nouveau**.

#### 2. Réinitialiser si nécessaire
Une fois toutes les sections résolues, le bouton **Réinitialiser** devient actif.
Cliquez dessus pour annuler les modifications apportées au fichier actuel si nécessaire.

#### 3. Terminer la résolution du chapitre
Une fois tous les conflits d'un chapitre résolus, le bouton **Résoudre le livre** apparaît.

<img src="/0.8.2/en_offline merge image4.png" width="1000px" alt=""/> 

#### 4. Chapitre marqué comme terminé

Une fois que vous avez cliqué sur **Résoudre le livre**, le numéro de chapitre sur la gauche apparaîtra barré, indiquant que tous les conflits de ce chapitre ont été résolus et qu'il est désormais marqué comme terminé.

<img src="/0.8.2/en_offline merge image5.png" width="1000px" alt=""/>

### Finaliser la fusion

- Après avoir résolu les conflits dans tous les chapitres d'un livre, l'utilisateur peut cliquer sur **Terminé**.
- Une fois tous les livres exempts de conflits, l'utilisateur peut terminer le processus de fusion en cliquant sur le bouton **Terminer**.

<video controls src="/0.8.2/en_conflictresolve.mp4" width="100%" type="video/mov"/>

</TabItem>

<TabItem value="Histoires de la Bible ouverte">

Visitez la page Importer un projet pour plus d’informations sur la façon d’importer un projet.

La fusion hors ligne fait référence au processus de fusion des modifications d'un traducteur à un autre travaillant sur le même projet. Il permet aux traducteurs d'apporter des modifications et d'effectuer des opérations de fusion sur leurs systèmes locaux. Cette fonctionnalité peut être utilisée avec plusieurs traducteurs. Lorsque plusieurs utilisateurs travaillent sur le même projet, des conflits peuvent survenir lors de la fusion. Cette page permet aux utilisateurs d'examiner les modifications conflictuelles, de décider comment les résoudre, puis de les fusionner si nécessaire.

### Étapes pour fusionner hors ligne ###

- Cliquez sur **Importer** <img src="/0.5.2/fr-import.png" width="80px" alt=""/> dans le coin supérieur droit de la page des projets
- Choisissez le dossier souhaité pour l'importation et cliquez sur Sélectionner un dossier/Ouvrir
- La boîte de dialogue IMPORTER UN PROJET apparaîtra et affichera les détails du projet, tels que le répertoire Scripture -Burrito, le nom du projet et de la langue et le type de projet.
  
<img src="/0.5.3/fr_import_project.png" width="100%" alt=""/>

- Pour confirmer l'importation, cliquez sur le bouton IMPORTER 
<img src="/0.5.3/fr_import_green.png" width="80px" alt=""/>
- Une boîte de dialogue Remplacer la ressource s'ouvrira avec les options Remplacer et Fusionner (uniquement pour OBS)
<img src="/0.5.3/fr_conflict_merge.png" width="100%" alt=""/>
- Si Remplacer est choisi, l'ensemble du projet est remplacé par le contenu entrant
- Si l'utilisateur sélectionne l'option Fusionner
- Il traitera l'opération de fusion du projet
- Si aucun conflit n'est détecté, l'utilisateur sera redirigé vers la page de liste des projets avec le projet mis à jour.
- S'il y a un conflit dans le projet
- L'utilisateur sera redirigé vers le volet Résoudre les conflits
<img src="/0.5.3/fr_resolve_conflict.png" width="100%" alt=""/>
- Supposons que l'utilisateur décide d'abandonner l'action Résoudre le conflit. Cliquez sur le symbole de fermeture (x) dans le coin supérieur droit. Cela fera apparaître une fenêtre d'abandon de la résolution du conflit.
<video controls src="/0.5.5/en-replaceandmerge.mov" width="100%" type="video/mov"></video>

### Étapes pour résoudre les conflits ###

**La page Résoudre les conflits s'affiche lorsqu'un utilisateur sélectionne l'option Fusionner.**
- Une liste de fichiers avec des conflits apparaît dans la partie gauche du volet
<img src="/0.5.3/fr_resolve_conflict.png" width="100%" alt=""/>
- Les sections/paras individuels peuvent être vus dans le volet de l'éditeur. Les conflits s'afficheront avec **Originale** en noire et **Nouvelle** en vert.
- Sélectionnez l'une des options proposées au-dessus de la section pour confirmer ( <img src="/0.5.2/fr-conflicts.png" width="30%" alt=""/>)
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
- Cliquez sur le bouton **Sauver** <img src="/0.5.3/fr_save_green.png" width="10%" alt=""/>
- Dans la partie gauche du volet, le fichier résolu est marqué barré, indiquant qu'il a été résolu.
  <img src="/0.5.3/fr_resolved.png" width="100%" alt=""/>
- Une fois tous les conflits résolus, un bouton **apparaîtra indiquant Tous les conflits résolus : Terminer, cliquez pour terminer le processus**

<video controls src="/0.5.5/en-conflictresolves.mov" width="100%" type="video/mov"></video>

</TabItem>
</Tabs>