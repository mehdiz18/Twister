# Twister

Détection du mouvement à partir d'une séquence d'images (correspondante à une vidéo) en noir et blanc. 

## A propos du projet

Le projet consiste en deux étapes. Le première étape étant la détectiond du mouvement, et la deuxième est le Traitement du bruit.
Pour l'algorithme de détection de mouvement, on a utilisé l'agorithme Sigma-Delta (SD ou Σ∆). Ce dernier est détaillé dans le rapport du projet, n'hésitez pas à le voir.  
Pour le traitement du bruit, on a utilisé les algorithmes de morphologie: Erosion, Dilatation, Ouverture et Fermeture. Eux aussi sont détaillés dans le rapport.   
Pour implémenter les algorithmes de morphologie, on a utilisé plusieurs optimisations : Optimisations Domain Specific : fusion / factorisation d’opérateurs, Optimisations logicielles : pipeline d’opérateurs et Optimisation des formats de calcul et de stockage en mémoire. Celles ci sont détaillées dans le rapport et même dans l'énoncé du projet.   


## Fait avec

<img src="https://img.shields.io/badge/C-ED8B00?style=for-the-badge&logo=&logoColor=white" data-canonical-src="https://img.shields.io/badge/C-ED8B00?style=for-the-badge&logo=java&logoColor=white"/>

## Pour Exécuter

Exécutez la commande : make  
Puis la commande : ./exe/motion_acc.exe  
  
Note : Vérifiez bien ce qui va être exécuté en regardant dans le fichier main.c

## Auteurs

- [@hadycht](https://github.com/hadycht)
- [@mehdiz18](https://github.com/mehdiz18)
