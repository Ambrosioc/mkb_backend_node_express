# MKB-Backend - API REST pour MKB-Automobile

Backend API REST développé avec Express.js pour la gestion des données automobiles. Le projet suit une architecture modulaire basée sur les principes **SOLID** et **DRY** pour une maintenabilité et une scalabilité optimales.

## 📋 Table des matières

- [Installation](#installation)
- [Démarrage](#démarrage)
- [Architecture](#architecture)
- [Structure du Projet](#structure-du-projet)
- [Routes API](#routes-api)
- [Documentation](#documentation)
- [Principes Appliqués](#principes-appliqués)
- [Développement](#développement)

## 🚀 Installation

### Prérequis

- Node.js (version 20.17.0 ou supérieure, ou 22.9.0+)
- npm ou pnpm

### Installation des dépendances

```bash
npm install
```

### Variables d'environnement

Créez un fichier `.env` à la racine du projet (optionnel) :

```env
PORT=5000
```

## ▶️ Démarrage

Démarrer le serveur de développement :

```bash
npm start
```

Le serveur démarre par défaut sur le port **5000** (ou le port défini dans `PORT`).

Accédez à la documentation à l'adresse : `http://localhost:5000/docs/introduction`

## 🏗️ Architecture

### Vue d'ensemble

Le projet utilise une architecture en couches séparant clairement les responsabilités :

```
┌─────────────────┐
│   Routes HTTP   │  ← Gestion des requêtes HTTP
└────────┬────────┘
         │
┌────────▼────────┐
│  Controllers    │  ← Logique métier et gestion d'erreurs
└────────┬────────┘
         │
┌────────▼────────┐
│    Services     │  ← Logique applicative et transformations
└────────┬────────┘
         │
┌────────▼────────┐
│      Data       │  ← Accès aux données (mockées ou DB)
└─────────────────┘
```

### Structure du Projet

```
mkb-backend/
├── src/
│   ├── config/                 # Configuration
│   │   ├── database.js        # Configuration base de données
│   │   └── prisma.js           # Client Prisma
│   │
│   ├── controllers/           # Contrôleurs (Logique métier)
│   │   └── carDataController.js
│   │
│   ├── services/               # Services (Logique applicative)
│   │   └── carDataServices.js
│   │
│   ├── data/                   # Données mockées
│   │   └── mockCars.js         # 19+ véhicules mockés
│   │
│   ├── routes/                 # Routes Express
│   │   ├── carDataRoute.js     # GET /api
│   │   ├── formRoute.js        # POST /api/form
│   │   ├── docsRoute.js        # Documentation /docs/*
│   │   └── homeRoute.js        # Redirection vers /docs
│   │
│   ├── views/                  # Templates de documentation
│   │   ├── components/         # Composants réutilisables
│   │   │   └── sidebar.js      # Sidebar de navigation
│   │   ├── layout/             # Layouts de base
│   │   │   └── base.js         # Layout principal
│   │   └── pages/              # Pages séparées
│   │       ├── index.js        # Exports centralisés
│   │       ├── introduction.js
│   │       ├── authentication.js
│   │       ├── endpoint-home.js
│   │       ├── endpoint-cars.js
│   │       ├── endpoint-form.js
│   │       ├── examples.js
│   │       ├── errors.js
│   │       └── resources.js
│   │
│   ├── public/                 # Fichiers statiques
│   │   ├── css/
│   │   │   └── styles.css      # Styles communs
│   │   └── js/
│   │       └── common.js       # JavaScript commun
│   │
│   ├── app.js                  # Configuration Express
│   └── index.js                # Point d'entrée
│
├── package.json
└── README.md
```

## 📡 Routes API

### Endpoints Principaux

#### `GET /api`
Récupère la liste complète des véhicules disponibles.

**Réponse :** `200 OK`
```json
[
  {
    "title": "Peugeot 208 Active",
    "marque": "Peugeot",
    "modele": "208",
    "reference": "PEU-208-2019-001",
    "prixttcaffiche": 12490,
    "kilometrage": 48500,
    "anneemodele": "2019",
    "energie": "Essence",
    "carrosserie": "Citadine",
    ...
  }
]
```

#### `POST /api/form`
Soumet un formulaire avec des données JSON.

**Body :**
```json
{
  "nom": "Dupont",
  "email": "dupont@example.com",
  "message": "Votre message"
}
```

**Réponse :** `200 OK`
```
"POST request to the homepage"
```

### Codes de statut HTTP

- `200 OK` - Requête réussie
- `400 Bad Request` - Requête mal formée
- `404 Not Found` - Ressource non trouvée
- `500 Internal Server Error` - Erreur serveur
- `502 Bad Gateway` - Erreur avec l'API externe
- `503 Service Unavailable` - Service indisponible

## 📚 Documentation

### Routes de Documentation

La documentation interactive est accessible via `/docs/*` :

- `/docs/introduction` - Introduction à l'API
- `/docs/authentication` - Authentification
- `/docs/endpoint/home` - Documentation GET /
- `/docs/endpoint/cars` - Documentation GET /api
- `/docs/endpoint/form` - Documentation POST /api/form
- `/docs/examples` - Exemples d'utilisation
- `/docs/errors` - Codes d'erreur HTTP
- `/docs/resources` - Ressources et liens utiles

### Fonctionnalités de la Documentation

- ✅ Interface de test interactive intégrée
- ✅ Navigation par sidebar
- ✅ Exemples de code pour chaque endpoint
- ✅ Documentation complète des réponses
- ✅ Liens vers les ressources externes
- ✅ Design moderne et responsive

## 🎯 Principes Appliqués

### SOLID

**Single Responsibility Principle (SRP)**
- Chaque fichier a une responsabilité unique
- Séparation claire entre routes, contrôleurs, services et données

**Open/Closed Principle (OCP)**
- Facile d'ajouter de nouvelles pages sans modifier l'existant
- Extension via ajout de routes sans modification du code existant

**Dependency Inversion Principle (DIP)**
- Dépendances gérées via imports ES6
- Pas de couplage fort entre modules

### DRY (Don't Repeat Yourself)

- **CSS commun** : Un seul fichier `styles.css` pour toutes les pages
- **JavaScript commun** : Fonctions réutilisables dans `common.js`
- **Layout de base** : Template réutilisable dans `base.js`
- **Sidebar** : Composant réutilisable dans `sidebar.js`
- **Exports centralisés** : Point d'entrée unique dans `pages/index.js`

## 🔧 Technologies Utilisées

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **ES Modules** - Import/export modernes
- **Prisma** - ORM (configuré mais non utilisé actuellement)
- **node-fetch** - Client HTTP (pour futures intégrations)
- **nodemailer** - Service d'email (pour futures fonctionnalités)
- **xml2js** - Parser XML (pour futures intégrations)

## 📦 Dépendances

```json
{
  "body-parser": "^1.20.3",
  "dotenv": "^16.6.1",
  "express": "^4.21.2",
  "node-fetch": "^3.3.2",
  "nodemailer": "^6.10.1",
  "prisma": "^5.22.0",
  "xml2js": "^0.6.2"
}
```

## 🛠️ Développement

### Ajouter une Nouvelle Page de Documentation

1. Créer le fichier dans `src/views/pages/`
   ```javascript
   import { getBaseLayout } from '../layout/base.js';
   
   export function getMaNouvellePage() {
     const content = `...`;
     return getBaseLayout('Titre', content, 'section-id');
   }
   ```

2. Exporter dans `src/views/pages/index.js`
   ```javascript
   export { getMaNouvellePage } from './ma-nouvelle-page.js';
   ```

3. Ajouter la route dans `src/routes/docsRoute.js`
   ```javascript
   router.get("/ma-route", (req, res) => {
     res.setHeader("Content-Type", "text/html; charset=utf-8");
     res.send(getMaNouvellePage());
   });
   ```

4. Ajouter le lien dans `src/views/components/sidebar.js`

### Architecture des Couches

#### 1. Routes (Couche HTTP)
- Gèrent les requêtes HTTP
- Valident les paramètres
- Appellent les contrôleurs

#### 2. Controllers (Couche Logique Métier)
- Contrôlent le flux d'exécution
- Gèrent les erreurs
- Appellent les services

#### 3. Services (Couche Logique Applicative)
- Contiennent la logique métier
- Accèdent aux données
- Gèrent les transformations

#### 4. Data (Couche Données)
- Données mockées (`mockCars.js`)
- Peut être remplacé par une base de données (Prisma configuré)

### Fichiers Statiques

Les fichiers statiques sont servis via Express :
- CSS : `/css/styles.css`
- JavaScript : `/js/common.js`

Ces fichiers sont automatiquement chargés dans toutes les pages via le layout de base.

## 📝 Exemples d'Utilisation

### JavaScript / Fetch API

```javascript
const getCars = async () => {
  try {
    const response = await fetch('http://localhost:5000/api');
    const cars = await response.json();
    console.log(cars);
  } catch (error) {
    console.error('Erreur:', error);
  }
};
```

### cURL

```bash
curl -X GET http://localhost:5000/api
```

```bash
curl -X POST http://localhost:5000/api/form \
  -H "Content-Type: application/json" \
  -d '{"nom":"Dupont","email":"dupont@example.com"}'
```

## 🔐 Sécurité

- Support CORS activé pour toutes les origines (`*`)
- Headers de sécurité peuvent être ajoutés via middleware Express
- Validation des données JSON côté client et serveur

## 📊 Données

Les données proviennent actuellement de fichiers mockés (`src/data/mockCars.js`). Le projet inclut **19+ véhicules** avec des informations complètes :

- Informations générales (marque, modèle, version)
- Caractéristiques techniques (énergie, puissance, boîte)
- Détails pratiques (prix, kilométrage, année)
- Localisation (ville)
- Photos

## 🚧 Évolutions Futures

- [ ] Authentification JWT ou API Key
- [ ] Intégration avec une base de données (Prisma)
- [ ] Rate limiting
- [ ] Validation des données avec un schéma
- [ ] Tests unitaires et d'intégration
- [ ] Logging avancé
- [ ] Documentation OpenAPI/Swagger

## 👥 Auteur

**ACWeb Services**

## 📄 Licence

ISC

## 🔗 Liens Utiles

- [GitHub Repository](https://github.com/mkb-automobile/mkb-backend)
- [Documentation Express.js](https://expressjs.com/)
- [Documentation Node.js](https://nodejs.org/)
- [MDN Web Docs - REST API](https://developer.mozilla.org/fr/docs/Glossary/REST)

---

**Version:** 1.0.0  
**Dernière mise à jour:** 2024
