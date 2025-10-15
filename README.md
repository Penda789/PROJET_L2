# PROJET_L2
Description
OOTD est une plateforme où les utilisateurs peuvent générer leurs tenues quotidiennes en fonction de la météo et de leur styles ainsi que des vetements disponibles dans leurs garde rones.

Fonctionnalités
Page d’accueil : Création de look journalier.
Profil utilisateur : Les utilisateurs peuvent gérer leurs informations personnelles.
Préferences utilisateurs : Permet a celui ci de définir son style vestimentaire.
Ajout de tenues : Interface permettant de télécharger des photos, ajouter des descriptions et des tags.
Technologies utilisées
Backend : PHP
Base de données : MySQL (via XAMPP)
Frontend : HTML, CSS, JavaScript
Prérequis
Avant de pouvoir exécuter ce projet localement, vous devez avoir installé :

XAMPP pour gérer le serveur local et la base de données MySQL.
Navigateur web pour tester l’application.
Installation
Clonez le projet depuis GitHub :
git clone https://github.com/ton-username/ootd.git
Placez le dossier du projet dans le répertoire htdocsde XAMPP (par exemple, C:\xampp\htdocs\ootd).
Lancez XAMPP et démarrez les modules Apache et MySQL .
Accédez à http://localhost/phpmyadmin/pour créer une nouvelle base de données nommées ootd.
Importez le fichier SQL pour configurer la base de données (si fourni dans le projet).
Configurez les paramètres de la base de données dans le fichier config.php: php
Copier le code $db_host = 'localhost'; $db_name = 'ootd'; $db_user = 'root'; $db_pass = ''; // Par défaut, il n'y a pas de mot de passe
Accédez à http://localhost/ootdpour visualiser l'application.
Utilisation
Créez un compte ou connectez-vous à votre profil.
Ajoutez vos tenues avec des photos, des descriptions et des tags.
Explorez les tenues des autres utilisateurs, aimez-les et laissez des commentaires.
Structure du projet
htdocs/: Contient les fichiers PHP, HTML, CSS et JavaScript.
database/ : Fichiers SQL pour la base de données MySQL.
Contributeur
Si vous souhaitez contribuer à ce projet :

Forkez ce dépôt.
Créez une branche pour votre fonctionnalité ( git checkout -b feature-name).
Apportez vos modifications et soumettez une pull request.
Licence
Ce projet est sous licence MIT.



