# sonatelacademy
# GESTION DE PLATEFORME DE COURS EN LIGNE

## Description
Ce projet consiste en la création d'une plateforme de gestion de cours en ligne en utilisant le langage C. Il permettra de gérer les utilisateurs (étudiants, professeurs et administrateurs), organiser les cours et les sessions, intégrer un système de paiement et d'abonnement, assurer le suivi des évaluations et certifications, ainsi que la gestion des fichiers et la persistance des données à l'aide de fichiers binaires.

## Fonctionnalités

### 1. Gestion des utilisateurs
- **Étudiants**
  - Inscription / Connexion
  - Achat de crédits
  - Inscription à un cours
  - Passer la certification
  - Voir ses certifications
  - Imprimer ses certifications

- **Professeurs**
  - Inscription / Connexion
  - Création de cours
  - Consultation du solde
  - Création de certifications

- **Administrateurs**
  - Gestion des utilisateurs (étudiants et professeurs)

### 2. Organisation des cours et sessions
- Création et gestion des cours par les professeurs
- Attribution des cours aux étudiants
- Planification des sessions de formation

### 3. Système de paiement et d'abonnement
- Achat de cours par les étudiants
- Gestion des crédits
- Répartition des revenus :
  - 70 % pour le professeur
  - 30 % pour la plateforme

### 4. Suivi des évaluations et certifications
- Système de quiz pour certification
- Attribution de certification si l'étudiant obtient un score supérieur ou égal à **70 %**
- Génération et impression des certifications

### 5. Gestion des fichiers et persistance des données
- Sauvegarde des données dans des fichiers binaires
- Chargement des données au démarrage de l'application

## Objectifs pédagogiques
Ce projet vise à renforcer les compétences en :
- **Programmation modulaire en C**
- **Manipulation des fichiers binaires**
- **Utilisation des pointeurs**
- **Gestion de la mémoire et des structures de données**

## Langage utilisé
- **C**

## Installation et exécution
1. Créer un fichier `README.md` et y insérer le contenu suivant :

   ```md
   # GESTION DE PLATEFORME DE COURS EN LIGNE
   
   ## Description
   Ce projet consiste en la création d'une plateforme de gestion de cours en ligne en utilisant le langage C...
   ```

2. Compiler le projet avec `gcc` :
   ```sh
   gcc -o plateforme_cours main.c fonctions.c -Wall
   ```
3. Exécuter le programme :
   ```sh
   ./plateforme_cours
   ```

## Auteur
- Thierno segnane , apprenant a la SONATEL ACADEMY , DEV WEB MOBILE .

