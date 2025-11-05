# Architecture du Projet MKB-Backend

## 📋 Vue d'ensemble

Ce projet suit les principes **SOLID** et **DRY** (Don't Repeat Yourself) pour une architecture modulaire, maintenable et scalable.

## 🏗️ Structure du Projet

```
src/
├── config/                 # Configuration (Prisma, Database)
│   ├── database.js
│   └── prisma.js
│
├── controllers/            # Contrôleurs (Logique métier)
│   └── carDataController.js
│
├── services/               # Services (Logique applicative)
│   └── carDataServices.js
│
├── data/                   # Données mockées
│   └── mockCars.js
│
├── routes/                 # Routes Express (Organisation par domaine)
│   ├── carDataRoute.js     # GET /api
│   ├── formRoute.js        # POST /api/form
│   ├── docsRoute.js        # Documentation modulaire /docs/*
│   └── homeRoute.js        # Redirection vers /docs
│
├── views/                  # Templates de documentation (SOLID)
│   ├── components/         # Composants réutilisables
│   │   └── sidebar.js      # Sidebar de navigation
│   ├── layout/             # Layouts de base
│   │   └── base.js         # Layout principal (DRY)
│   └── pages/              # Pages séparées (Single Responsibility)
│       ├── index.js        # Point d'export centralisé
│       ├── introduction.js
│       ├── authentication.js
│       ├── endpoint-home.js
│       ├── endpoint-cars.js
│       ├── endpoint-form.js
│       ├── examples.js
│       ├── errors.js
│       └── resources.js
│
└── public/                 # Fichiers statiques (DRY)
    ├── css/
    │   └── styles.css      # Styles communs
    └── js/
        └── common.js       # JavaScript commun (test, navigation)

├── app.js                  # Configuration Express principale
└── index.js                # Point d'entrée de l'application
```

## 🎯 Principes Appliqués

### SOLID

1. **Single Responsibility Principle (SRP)**
   - Chaque fichier a une responsabilité unique
   - Ex: `carDataController.js` gère uniquement la logique des contrôleurs
   - Ex: Chaque page a son propre fichier

2. **Open/Closed Principle (OCP)**
   - Facile d'ajouter de nouvelles pages sans modifier l'existant
   - Ajout de routes via `docsRoute.js` sans toucher aux autres

3. **Dependency Inversion Principle (DIP)**
   - Les dépendances passent par les imports
   - Pas de couplage fort entre modules

### DRY (Don't Repeat Yourself)

1. **CSS commun** : Un seul fichier `styles.css` pour toutes les pages
2. **JavaScript commun** : Fonctions réutilisables dans `common.js`
3. **Layout de base** : Template réutilisable dans `base.js`
4. **Sidebar** : Composant réutilisable dans `sidebar.js`
5. **Exports centralisés** : Point d'entrée unique dans `pages/index.js`

## 📍 Routes Disponibles

### API Routes
- `GET /api` - Récupère les données des voitures
- `POST /api/form` - Soumet un formulaire

### Documentation Routes
- `GET /` - Redirige vers `/docs/introduction`
- `GET /docs` - Redirige vers `/docs/introduction`
- `GET /docs/introduction` - Page d'introduction
- `GET /docs/authentication` - Page d'authentification
- `GET /docs/endpoint/home` - Documentation GET /
- `GET /docs/endpoint/cars` - Documentation GET /api
- `GET /docs/endpoint/form` - Documentation POST /api/form
- `GET /docs/examples` - Exemples d'utilisation
- `GET /docs/errors` - Codes d'erreur HTTP
- `GET /docs/resources` - Ressources et liens utiles

## 🔧 Architecture des Couches

### 1. Routes (Couche HTTP)
- Gèrent les requêtes HTTP
- Valident les paramètres
- Appellent les contrôleurs

### 2. Controllers (Couche Logique Métier)
- Contrôlent le flux d'exécution
- Gèrent les erreurs
- Appellent les services

### 3. Services (Couche Logique Applicative)
- Contiennent la logique métier
- Accèdent aux données
- Gèrent les transformations

### 4. Data (Couche Données)
- Données mockées
- Peut être remplacé par une base de données

## 🚀 Ajouter une Nouvelle Page de Documentation

1. Créer le fichier dans `src/views/pages/`
2. Exporter la fonction dans `src/views/pages/index.js`
3. Ajouter la route dans `src/routes/docsRoute.js`
4. Ajouter le lien dans `src/views/components/sidebar.js`

## 📦 Fichiers Statiques

Les fichiers statiques sont servis via Express :
- CSS : `/css/styles.css`
- JS : `/js/common.js`

Ces fichiers sont automatiquement chargés dans toutes les pages via le layout de base.

## 🔄 Migration depuis l'ancienne architecture

L'ancien fichier `constant/index.js` a été remplacé par :
- `src/views/pages/*.js` - Pages séparées
- `src/public/css/styles.css` - Styles séparés
- `src/public/js/common.js` - JavaScript séparé

L'ancien fichier peut être supprimé après vérification.

