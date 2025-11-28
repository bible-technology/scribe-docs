---
id: p9-1-Videorecording
sidebar_label: Enregistrement vidéo
title: Enregistrement vidéo
---
Video Flavour permet aux utilisateurs d'enregistrer et d'organiser des projets vidéo basés sur des versets directement dans l'éditeur.

### Création d'un nouveau projet vidéo
- Cliquez sur le bouton **Nouveau** pour démarrer un nouveau projet.
- Sur la page Nouveau projet, ouvrez le menu déroulant pour sélectionner le type de projet.
- Choisissez **Vidéo** dans la liste et créez le projet.
- Sur la page Nouveau projet, saisissez les informations suivantes :
  - Nom du projet
  - Description du projet
  - Abréviation (elle sera générée automatiquement lors de la saisie du nom du projet. Vous pouvez la modifier si nécessaire)
  - Langue cible
- Après avoir saisi les informations requises, cliquez sur **Créer le projet**. Une fois le projet créé, il apparaîtra comme un nouvel élément sur la page PROJETS.
- Paramètres avancés (pour en savoir plus sur les paramètres avancés, consultez la page **[Paramètres avancés](../../Manage%20Project/Create%20a%20Project/p2-2-advanced%20settings.md)**).

**Pour définir le périmètre du projet, consultez la page [Gestion du périmètre](../../Manage%20Project/Projects/p3-8-scope%20management.md)**.
<video controls src="/1.1.0/en_createvideoproject.mp4" width="100%" type="video/mov"/>

## Interface de l'éditeur
Lorsque l'utilisateur ouvre un projet avec l'option Vidéo, l'éditeur se charge et affiche les versets ainsi que les boutons d'enregistrement vidéo.

### Enregistrement vidéo
- Cliquez sur l'icône **Caméra** à côté du verset que vous souhaitez enregistrer.
- Une fenêtre d'enregistrement vidéo apparaît.
- Assurez-vous que la **caméra** et le microphone sont correctement connectés.
- Cliquez sur l'icône **paramètres de la caméra** pour sélectionner votre caméra préférée.
- Lorsque vous êtes prêt :
   - Cliquez sur le bouton **Caméra** pour démarrer l'enregistrement.
   - Cliquez sur l'icône **Microphone** pour **activer** ou **désactiver** le son. L'utilisateur peut enregistrer avec ou sans son.
- Une fois l'enregistrement terminé, cliquez sur le bouton **Arrêter**.
- Après l'enregistrement, la vidéo est automatiquement **enregistrée** et visible dans le verset correspondant.
- Utilisez les boutons **Verset précédent (<)** ou **Verset suivant (>)** pour naviguer entre les versets. 
- Prévisualisez votre vidéo et reprenez-la si nécessaire après avoir supprimé la vidéo existante.
<video controls src="/1.1.0/en_videorecording.mp4" width="100%" type="video/mov"/>

### Réenregistrement
Pour réenregistrer, supprimez la vidéo existante, cliquez sur le bouton de la caméra et lancez l'enregistrement.

### Fusion des versets
- **Faites un clic droit** sur un verset.
- Une option « Fusionner avec le verset précédent » apparaît.
- Cliquez sur cette option pour lier deux versets consécutifs.
- Une fois liés, les versets seront traités comme une seule unité pour l'enregistrement vidéo.
- Lors de la fusion, toutes les vidéos précédemment enregistrées pour ces versets seront automatiquement supprimées, ce qui vous permettra de réenregistrer une vidéo combinée.
- Vous pouvez également séparer les versets si vous le souhaitez.
- Après avoir séparé les versets, vous pouvez enregistrer une vidéo pour chaque verset individuellement.
<video controls src="/1.1.0/en_joiningverses.mp4" width="100%" type="video/mov"/>

# Options d'exportation de projet
### Étapes pour exporter un projet
- Choisissez le projet à **exporter** sur la page Projet
- Cliquez sur la **flèche vers le bas** pour afficher un menu déroulant contenant la description du projet
- Cliquez sur le menu à **trois points** avec les options suivantes :
   - Modifier
   - Exporter
   - Archiver
   - Gestion de la portée
- Sélectionnez **Exporter** pour exporter le projet vers un périphérique local
- Une boîte de dialogue s'affiche ; saisissez le chemin d'accès au fichier souhaité
- Cliquez sur **Exporter**. La fenêtre d'exportation s'ouvre avec les options suivantes :
    - **1. Exportation par défaut (recommandée)**
    - **2. Exportation pour usage externe**

### 1. Exportation par défaut
- Les versets liés n'apparaissent PAS dans le fichier **USFM**.
- Les informations relatives aux versets liés sont enregistrées dans le fichier de données **exporté**.
- Ce type d'exportation **peut être réimporté** dans **Scribe**.
- Après avoir réimporté le projet, les utilisateurs peuvent **désassembler** les versets précédemment liés. 
<video controls src="/1.1.0/en_videoexport.mp4" width="100%" type="video/mov"/> 

### 2. Exportation pour usage externe
- Les versets liés sont visibles dans le fichier **USFM**.
- Cette exportation est destinée à un usage externe/tiers.
- Ce type d'exportation n'est pas recommandé pour l'importation dans Scribe.
- Comme il ne peut pas être importé, les utilisateurs **ne peuvent pas dissocier** les versets liés après l'exportation.

**Étapes pour importer un projet [Importer un projet](../../Manage%20Project/Projects/p3-3-import%20project.md)**

### Importation d'une exportation par défaut
Le projet peut être réimporté dans Scribe. L'utilisateur peut ensuite modifier ou dissocier les versets liés.

### Importation d'une exportation pour usage externe
- Les projets exportés pour usage externe ne peuvent pas être réimportés.
- Les versets liés dans le fichier USFM sont conservés définitivement, car la réimportation est impossible.