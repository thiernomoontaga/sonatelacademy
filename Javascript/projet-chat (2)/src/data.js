export const utilisateurs = [
  {
    id: 1,
    nom: "Diassy",
    prenom: "Bakary",
    numero: "+221771234567",
    statut: "Disponible",
    avatar: "bakary.jpg",
    enLigne: true,
    archive: false,
  },
  {
    id: 2,
    nom: "Queen of UI/UX",
    prenom: "Fall",
    numero: "+221784318598",
    statut: "Occupée",
    avatar: "khadiatou.jpg",
    enLigne: false,
    archive: false,

  },
  {
    id: 3,
    nom: "Miss Algorithme",
    prenom: "Sock",
    numero: "+221778111432",
    statut: "Disponible",
    avatar: "khadiatou.jpg",
    enLigne: false,
    archive: false,
  },
  {
    id: 4,
    prenom: "Bakary",
    nom: "Ndiaye",
    numero: "+221771234556",
    statut: "Disponible",
    avatar: "khadiatou.jpg",
    enLigne: false,
    archive: false,
  }
];

export const conversations = [
  {
    id: 101,
    participants: [1, 2],
    messages: [
      {
        id: 1,
        expediteurId: 1,
        contenu: "Salut Khadiatou !",
        date: "2025-05-26T10:00:00",
        lu: true,
        type: "texte"
      },
      {
        id: 2,
        expediteurId: 2,
        contenu: "Salut Bakary ! Comment ça va ?",
        date: "2025-05-26T10:02:00",
        lu: true,
        type: "texte"
      }
    ]
  }
];


export const groupes = [
  {
    id: 1,
    nom: "Team Dev Web Mobile",
    avatar: "./back.jpg",
    membres: [1, 2, 3],
    description : 'Groupe des dev de odc',
    messages: [
      {
        id: 1,
        expediteurId: 1,
        contenu: "Salut l'équipe, on commence à coder à 14h ?",
        heure: "00:00",
        luPar: [2],
        type: "texte"
      },
      {
        id: 2,
        expediteurId: 3,
        contenu: "Oui, ça marche pour moi.",
        heure: "05:00",
        luPar: [1, 2],
        type: "texte"
      }
    ]
  },
  {
    id: 2,
    nom: "Projet Kodoo",
    avatar: "./back.jpg",
    membres: [1, 3],
    description : 'Projet Kodoo',
    messages: [
      {
        id: 1,
        expediteurId: 3,
        contenu: "Bakary, tu as vu la maquette de l'app ?",
        heure: "10:00",
        luPar: [],
        type: "texte"
      }
    ]
  }
];


