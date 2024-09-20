---
id: p3-8-sync
sidebar_label: Synchroniser la collaboration
title: Synchroniser la collaboration
---

**Il permet à plusieurs utilisateurs de Collabrate à distance**

### Connexion au serveur DOOR43

**Étapes**

- Cliquer sur le bouton **Synchroniser** sur le côté gauche de l'écran
- Cliquez sur **S'inscrire maintenant**. Remplissez tous les champs sur la page d'inscription DOOR43, puis cliquez sur **Enregistrer le compte**
- L'utilisateur reçoit un lien dans l'identifiant de courriel fourni
- Cliquez sur le lien et confirmez à nouveau le mot de passe pour activer le compte utilisateur
- Maintenant, connectez-vous avec le nom d'utilisateur et le mot de passe sur la **Sribe Synchroniser page**
<video controls src="/0.5.5/en-Logintotheserver.mov" width="100%" type="video/mov"></video>

### Synchronisation vers le cloud

**Étapes**

- Entrez un nom d'utilisateur et un mot de passe valides pour accéder à votre compte DOOR 43
- Sélectionnez le projet sur lequel vous souhaitez travailler, à partir du volet **Synchroniser**
- Après avoir sélectionné le projet désiré, cliquez sur le bouton **Synchroniser** sur le volet SYNC
- Une barre de progression va apparaître, montrant l'état et la finalisation du processus **Synchronisation**
- Une fois le projet synchronisé avec succès, il sera listé au bas du volet **Projets sur le cloud**

<video controls src="/0.5.5/en-cloudsync.mov" width="100%" type="video/mp4"></video>



### Synchronisation hors ligne

**Étapes**

- Entrez un nom d'utilisateur et un mot de passe valides pour accéder à votre compte DOOR 43
- Dans le volet **PROJETS SUR LE CLOUD**, entrez le nom d'utilisateur du propriétaire du projet dans le champ spécifié
- Choisissez le projet que vous souhaitez télécharger sur votre système local
- Le projet sélectionné sera filtré et le volet **PROJETS SUR LE CLOUD**affichera le bouton **OFFLINE SYNCHRONISER**
- En cliquant sur le bouton **OFFLINE SYNCHRONISER**, vous pouvez télécharger le projet sur votre système local
- Le projet téléchargé apparaîtra dans le volet **SYNCHRONISER**
- Pour modifier le projet téléchargé, accédez à la page PROJETS et choisissez le projet téléchargé

<video controls src="/0.5.5/en-offlinesync.mov" width="100%" type="video/mp4"></video>



### Contribuer à un projet partagé

**Étapes**

**Propriétaire du projet**

- Le propriétaire du projet doit se connecter à DOOR43, https://git.door43.org/
- Ajoutez le nom d'utilisateur Door43
- Sélectionnez le projet à **collaborez**
- Cliquez sur l'onglet **collaborateur**
- Ajouter les noms des identifiants des collaborateurs
- Sélectionnez **Add Collaborator**
- Donner accès au collaborateur en tant** Administrator, Write ou Write**

**Étapes permettant au collaborateur d'accéder au projet**

- Ouvrez l'application de scribe, aller à la page **Synchroniser**
- Connectez-vous au compte DOOR43
- L'utilisateur/collaborateur peut alors entrer le nom du propriétaire du projet dans le champ donné sur la page de synchronisation de Scribe
- Sélectionnez le projet à travailler
- Cliquez sur **synchronisation hors ligne** en haut à droite
- Le projet sera synchronisé avec Scribe
- Une notification indiquant 'Synchronisation du projet au scribe réussie' apparaîtra en bas à gauche
- Le projet a été mis en place pour le travail

<video controls src="/0.5.5/en-collabsync.mov" width="100%" type="video/mp4"></video>



### Comment synchroniser un projet

**Étapes**

- Cliquez sur le bouton **Synchroniser** sur le côté gauche de la fenêtre (Si vous êtes un nouvel utilisateur, Créer un nouveau compte dans DOOR43)
- Si vous êtes un nouvel utilisateur, inscrivez-vous sur votre [compte DOOR43](./p3-8-sync#connexion-au-serveur-door43), ou bien connectez-vous à DOOR43
- Une liste de tous les projets utilisateur apparaîtra à gauche de la fenêtre de synchronisation
- Le côté droit de l'écran affichera tous les projets enregistrés sur le serveur distant DOOR43
- Glisser et déposer un projet vers le conteneur placé sur le côté droit de l'écran
- En haut de l'écran, l'utilisateur peut voir la barre de progression du téléchargement
- Le projet sera ensuite téléchargé sur le serveur distant DOOR43 et affiché à l'utilisateur dans la colonne de droite de l'écran
<video controls src="/0.5.5/en-syncaproject.mov" width="100%" type="video/mp4"></video>

### Synchroniser un projet depuis le module projet

Un projet peut être directement synchronisé par l'utilisateur à partir du module projet.

**Étapes**

- Cliquez sur le module du projet et ouvrez un projet
- Cliquez sur le bouton **Synchroniser**
- La barre de progression de téléchargement sera affichée en haut
- (Connectez-vous au serveur DOOR43 si vous n'êtes pas encore terminé)
<video controls src="/0.5.5/en-projectsync.mov" width="100%" type="video/mp4"></video>

### Synchroniser un projet depuis le serveur distant DOOR43

L'utilisateur peut **Synchroniser** un projet du serveur vers le système local.

**Étapes**

- Cliquez sur le bouton **Synchroniser** pour vous connecter au compte DOOR43 sur le côté droit de la colonne
- Il répertorie chaque projet sur le serveur de la porte 43
- (Le projet ne doit pas être enregistré)
- Glissez et déposez un projet depuis la liste du serveur DOOR43 dans le conteneur sur le côté gauche de l'écran
- Avec cela, un projet sera synchronisé depuis le serveur

<video controls src="/0.5.5/en-syncback.mov" width="100%" type="video/mov"></video>

### Fusionner un projet à partir du serveur distant DOOR43

**Étapes**

- Cliquez sur le bouton **Synchroniser**, connectez-vous au compte DOOR43
- Il affiche tous les projets dans le serveur de DOOR43 à droite de la colonne
- Glissez et déposez un projet depuis la liste du serveur DOOR43 dans le conteneur sur le côté gauche de l'écran
- La barre de progression apparaîtra
- (Vous pouvez annuler le processus de fusion en cliquant sur le bouton Annuler avant de compter vers une fin)
- Ceci fusionnera un projet du serveur
<video controls src="/assets/merge.mov" width="100%" type="video/mov"></video>