# 📬 MiniChat - Application de Chat Web

MiniChat est une application de messagerie en **Vanilla JS**, propulsée par **Vite**, stylisée avec **Tailwind CSS**, et utilisant **JSON Server** comme API mock pour gérer les données côté backend.

## 🚀 Fonctionnalités

- ✅ Authentification (connexion utilisateur)
- 💬 Envoi de messages privés
- 👥 Création de groupes avec membres
- 🧵 Discussion dans un groupe
- 📁 Archivage de contacts et groupes

---

## 📁 Structure du Projet

```
MiniChat/
│
├── DATA/                      # Données mock JSON Server
│   └── db.json
│
├── public/                   # Fichiers statiques publics
│   └── index.html
│
├── src/
│   ├── assets/               # Images, icônes, etc.
│   ├── components/           # Composants UI (Header, MessageCard...)
│   ├── pages/                # Pages de l'app (Login, Chat, GroupChat...)
│   ├── router/               # Gestion de navigation (SPA)
│   ├── services/             # Requêtes API (fetch vers JSON Server)
│   ├── store/                # Données globales (état utilisateur, messages)
│   ├── styles/               # Fichiers CSS personnalisés
│   ├── utils/                # Fonctions utilitaires (formattage date...)
│   ├── App.js                # Point d'entrée de l'app
│   └── main.js               # Initialisation Vite
│
├── tailwind.config.js        # Config Tailwind
├── postcss.config.js         # PostCSS config
├── package.json              # Dépendances et scripts
├── vite.config.js            # Config Vite
└── README.md                 # Cette documentation
```

---

## ⚙️ Installation

```bash
# Cloner le repo
$ git clone https://github.com/tonpseudo/minichat.git

# Accéder au projet
$ cd MiniChat

# Installer les dépendances
$ npm install

# Lancer le projet (frontend)
$ npm run dev

# Lancer JSON Server (backend mock)
$ npx json-server --watch DATA/db.json --port 3001
```

---

## 🧪 Tester l’API avec JSON Server

Endpoints disponibles :
- `GET     /users`
- `GET     /contacts`
- `GET     /groups`
- `GET     /messages`
- `POST    /messages`
- `PATCH   /contacts/:id`
- `PATCH   /groups/:id`

Utilise **Thunder Client** ou **Postman** pour simuler les requêtes REST (CRUD).

---

## ✨ Stack Technique

- **Frontend** : Vanilla JavaScript + Vite + Tailwind CSS
- **Backend** : JSON Server (API REST simulée)
- **Tools** : Thunder Client, Git, VS Code

---

## 📌 TODO

- [ ] Authentification complète avec état
- [ ] Intégration du localStorage/session
- [ ] Gestion temps réel via polling ou WebSocket (bonus)
- [ ] Mode sombre (UX++)

---

## 🙌 Thierno segnane

- [thierno segnane](https://github.com/tonpseudo) — Développeur Fullstack
