---
id: p5-3-pdfgenerator
sidebar_label: Générateur de PDF
title: Générateur de PDF
---

# Générateur de PDF

Le générateur de PDF est disponible dans les modes BT, OBS et Juxta.

## Limitations actuelles
- La fermeture de la fenêtre d'exportation réinitialise ses paramètres. Si vous souhaitez essayer différents paramètres, veillez à laisser la fenêtre ouverte entre les impressions
- Le bouton **Reset** <img src="/0.7.0/Reset.png"  width="50px" alt="reset"/> a un effet spécifique : il ne réinitialise que les champs de saisie qui sont **sous un champ Print Type** et qui ont été modifiés (ils apparaissent une fois qu'un Print type est sélectionné)
- Pour du contenu **Translation** (BT, Juxta), la **Sélection de livre** fonctionne par activation on/off <img src="/0.7.0/Bookselection.png"  width="500px" alt="bookselection"/>
- Les langues de droite à gauche (RTL) ne sont pas prises en charge

## Étapes pour utiliser le générateur de PDF
### Mode par défaut
Le mode par défaut imprime le projet Scribe actuellement ouvert, avec une seule mise en page.
- Cliquez sur le bouton **Imprimer** <img src="/0.7.0/Print.png"  width="50px" alt="print"/> dans le coin supérieur droit de l'écran
- Une fenêtre d'exportation s'ouvre
- Modifiez les paramètres généraux si nécessaire (**Paper size**, **Font**, **Font size**)
- Le **Content (contenu)** ajouté sous ces paramètres généraux dépend du projet à partir duquel vous avez lancé le générateur de PDF :
  - Un bloc **Translation** pour les projets BT et Juxta
  - Un bloc **OBS** pour les projets OBS
- Dans les deux cas, sélectionnez une plage d'impression :
  - Translation : quels livres imprimer (**All Books**, **Old Testament**, **New Testament**, **Custom**)
  - OBS : quelles histoires imprimer (le numéro de début **obs start**, et de fin **obs end**)

- **Print type** : les options disponibles varient en fonction du type de bloc de contenu (Translation, OBS), sélectionnez une option de **Print type**
- Chaque Print type a des paramètres spécifiques, ils apparaissent en dessous une fois qu'un type d'impression est sélectionné. La plupart de ces paramètres sont facultatifs
- Choisissez un dossier d'exportation à l'aide du bouton correspondant (**Choose an export folder**)
- Vous pouvez donner un nom à votre fichier dans le champ **your file name here**, ou il sera nommé de manière aléatoire
- Cliquez sur le bouton **Print**
- Si un champ obligatoire est vide ou mal rempli, une erreur apparaît sur le côté droit de la fenêtre d'exportation pour aider à localiser l'erreur
- Sans erreurs, les étapes de génération apparaissent à droite de la fenêtre d'exportation, attendez le message final "Successful pdf generation"

### Advanced mode (Mode avancé)
Le **Mode avancé** peut être utilisé pour générer un seul PDF contenant de nombreux projets différents avec de nombreuses mises en page différentes, ainsi que des introductions et des PDF importés. Il est également plus technique à configurer.
- Lorsque le **Advanced mode** est activé, trois nouvelles options sont disponibles :
  - Le projet automatiquement ajouté (celui qui est actuellement ouvert dans Scribe) peut être modifié avec le bouton **Select** <img src="/0.7.0/Select.png"  width="50px" alt="select"/>, à droite du nom du projet
  - Un nouveau bloc de contenu peut être ajouté avec le bouton **Add** <img src="/0.7.0/Addblock.png"  width="70px" alt="addblock"/>
      - Le contenu sera imprimé par ordre d'apparition dans la fenêtre d'exportation
      - Une fois que deux blocs de contenu ou plus sont listés, ils peuvent être supprimés avec le bouton **Corbeille**  <img src="/0.7.0/Trash.png"  width="40px" alt="trash"/>
  - Le **Loop mode (Mode boucle)** peut être utilisé ; lorsqu'il est actif, une nouvelle option est disponible :
    - À l'intérieur d'un bloc de contenu, un nouveau projet peut être ajouté avec le bouton **Add** <img src="/0.7.0/Addproject.png"  width="50px" alt="addproject"/>
      - Le contenu sera imprimé par ordre d'apparition dans le bloc de contenu, **pour chaque livre ou histoire sélectionné(e)** (donc en boucle)
      - Une fois que deux projets ou plus sont listés dans un bloc de contenu, ils peuvent être supprimés à l'aide du bouton **Corbeille**  <img src="/0.7.0/Trash.png"  width="40px" alt="trash"/>