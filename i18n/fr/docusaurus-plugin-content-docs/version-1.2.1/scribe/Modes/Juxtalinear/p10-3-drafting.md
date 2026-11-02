---
id: p10-3-drafting
sidebar_label: Ébauche
title: Ébauche
---


## Étapes pour ébaucher une Juxtalinéaire
- [Créez un nouveau projet](https://docs.scribe.bible/fr/scribe/Manage%20Project/Create%20a%20Project/p2-1-new%20project) en utilisant le type de projet **Juxta**
  - Dans ce mode, il est obligatoire d'utiliser **Import Books** <img src="/0.5.2/fr-import.png"  width="70px" alt="import"/>
  - Le fichier importé sera utilisé comme colonne gauche de la juxtalinéaire (Texte Source)
  - L'utilisateur a deux options ici :
    - Trouver un fichier au format USFM sur [Door43](https://git.door43.org/catalog), le télécharger et le sélectionner dans la boîte de dialogue
    - Utiliser un fichier local au format USFM ou JSON. Pour les fichiers au format JSON uniquement, l'utilisateur doit renommer le fichier avec le nom abrégé du livre (par exemple, MRK.json ou mrk.json)
  - Il est possible d'importer un ou plusieurs livres
  - Notez qu'il sera possible de créer une juxtalinéaire **uniquement** pour les livres disponibles dans le fichier Texte Source téléchargé
- Sélectionnez dans la page Projets le nouveau projet Juxta créé
- Si besoin, configurez la [mise en page](https://docs.scribe.bible/fr/scribe/Modes/Common%20Functionality/p5-1-layout) et les [ressources de référence](https://docs.scribe.bible/fr/scribe/Modes/Common%20Functionality/p5-2-resources) du projet

## Comment travailler sur une Juxtalinéaire ?
- En commençant une juxtalinéaire, l'utilisateur verra une phrase du Texte Source (quelques versets) affichée sur une seule ligne

![Premier affichage d'une juxtalinéaire](/0.7.0/Drafting.PNG)

- À partir de là, le travail sur une juxtalinéaire consiste à :
  - Découper la phrase du Texte Source en petits morceaux grammaticalement significatifs (contenant des mots qui vont ensemble grammaticalement)
    - Double-cliquez sur un mot pour couper la phrase sur ce mot spécifique
    - Double-cliquez sur le premier mot d'un morceau de phrase pour le fusionner avec le morceau précédent
  - Réorganiser le Texte Source pour s'approcher de l'ordre naturel des mots de la Langue Cible
    - Maintenez le clic sur un mot
    - Déplacez le mot dans la ligne ou entre les lignes
    - Relâchez le clic
  - Ajouter une traduction hyper-littérale pour chaque morceau de phrase
    - Ajoutez une traduction en double-cliquant sur un champ de texte ou en cliquant sur **Éditer** <img src="/0.7.0/JuxtaEditbutton.png"  width="40px" alt="editbutton"/>
    - Tapez une traduction
    - Quittez l'édition en cliquant en dehors du champ de texte ou en cliquant sur **Valider** <img src="/0.7.0/JuxtaCheckbutton.png"  width="40px" alt="Juxtacheckbutton"/>
  - Notez que ces trois étapes peuvent être faites dans un ordre différent, l'utilisateur peut vouloir commencer à réorganiser avant de découper, ou découper et réorganiser la phrase entière avant de commencer la traduction, par exemple

<video controls src="/0.7.0/Juxta-FR.mov" width="100%" type="video/mov"/>

- De plus, l'utilisateur peut vouloir utiliser ces deux conventions de juxtalinéaire pour faciliter la compréhension des traducteurs :
  - Chaque mot du Texte Source doit être traduit en un seul mot de la Langue Cible. Quand deux mots de la Langue Cible sont nécessaires, reliez-les avec un **tiret**
  - Utilisez des italiques pour les mots nécessaires dans la Langue Cible qui ne sont pas présents dans le Texte Source. Ceci est fait en mettant le mot entre des **astérisques**
- En général, notez que la traduction du Texte Cible n'a pas besoin d'être élégante, elle doit simplement transmettre le sens des mots de chaque morceau du Texte Source