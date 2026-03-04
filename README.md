# Laboratoire - Système de Planification

## Description

L'application reçoit des données contenant des **échantillons**, des **techniciens** de laboratoire et des **machines** d'analyse disponibles dans le laboratoire.

L'objectif est de relier ces trois types de données pour créer un planning journalier où chaque échantillon sera analysé par un technicien et une machine disponibles. Les échantillons ont un ordre de **priorité** qui est pris en compte au moment de créer le planning.

L'application permet de récupérer une liste contenant les identifiants des échantillons testés dans la journée ainsi que le technicien et la machine affiliés à son analyse.

## Installation

`npm install` pour installer les dépendances du projet

`npm start` pour démarrer l'application

`npm test` pour démarrer les tests 


## Utilisation

`npm start` permet d'utiliser l'application avec un jeu de données fantômes. 

Pour utiliser vos propres données, il vous suffit d'ajouter votre fichier de données (format `json`) dans le dossier `/src/data` et de modifier le chemin de fichier de la variable `INPUT_PATH` dans le fichier  `/src/config.ts` 

`npm start` créé un fichier `output.txt` au format texte dans le dossier `src/data`. Ce fichier contient le planning créé à l'aide de l'application.

## Evolutions futures

Il serait pertinent d'ajouter des tests automatisés des différentes fonctionnalités.
Actuellement, une vérification manuelle a été effectuée. 
Seront ajoutés :
- des **tests unitaires** de chaque fonction
- des **tests de non-regression** afin de s'assurer que l'ajout de fonctionnalité n'empêche pas le fonctionnement de l'application
- la possibilité d'écrire les données ainsi créées dans un fichier sous un format choisi (pas seulement format texte)