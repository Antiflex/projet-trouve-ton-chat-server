# 🐈 Trouve Ton Chat - Web App

**Trouve Ton Chat** est une plateforme communautaire interactive conçue pour aider les propriétaires de chats à retrouver leurs animaux disparus. Grâce à une carte interactive, les utilisateurs peuvent signaler des disparitions ou des signalements en temps réel.

🚀 **Démo en ligne :** [https://projet-trouve-ton-chat-server.onrender.com/](https://projet-trouve-ton-chat-server.onrender.com/)

## 🌟 Fonctionnalités

* **Carte Interactive :** Visualisation globale des annonces sur une carte pour une recherche géographique intuitive.
* **3 Types de Signalements :** * 🔴 **Chat perdu :** Annonce déposée par le propriétaire.
    * 🟡 **Chat aperçu :** Signalement d'un chat errant sans capture.
    * 🟢 **Chat trouvé :** Chat recueilli en attente de son propriétaire.
* **Gestion des Annonces :** Création simplifiée en cliquant directement sur la carte pour définir la position.
* **Fiches Détaillées :** Informations complètes pour chaque chat (Nom, race, couleur des yeux, couleur de la fourrure, signes distinctifs).
* **Architecture Fullstack :** Gestion des données en temps réel avec une base de données relationnelle.

## 🛠️ Stack Technique

* **Backend :** Node.js avec le framework Express.
* **Base de données :** PostgreSQL (hébergée sur Render).
* **Frontend :** HTML5, CSS3, JavaScript (client-side).
* **Cartographie :** Intégration d'API de mapping (Leaflet/OpenStreetMap).

## 🚀 Installation Locale

Pour faire tourner le projet sur votre machine :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/VOTRE_USERNAME/trouve-ton-chat.git](https://github.com/VOTRE_USERNAME/trouve-ton-chat.git)
    cd trouve-ton-chat
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurer la base de données :**
    * Créez un fichier `.env` à la racine du projet.
    * Ajoutez votre URL de connexion PostgreSQL :
        `DATABASE_URL=postgresql://user:password@host:port/dbname`

4.  **Lancer l'application :**
    ```bash
    npm run start
    # OU
    node app.js
    ```
    L'application sera disponible sur `http://localhost:3000`.

## 🗄️ Schéma de la Base de Données

Le projet utilise PostgreSQL pour stocker les annonces. Le schéma inclut les informations suivantes :
* `type` : perdu, aperçu ou trouvé.
* `latitude` / `longitude` : coordonnées géographiques du signalement.
* `cat_details` : nom, race, yeux, fourrure, etc.

---
Projet réalisé par **Alexandre Baudin**, **Julien Saunoi**, **Alexis Georges** et **Virgile Martel** dans le cadre de la formation ingénieur à l'EFREI en 2ème année.
