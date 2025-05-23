const games = [
  {
    id: 1,
    title: "The Legend of Zelda",
    genre: "Adventure",
    score: 98
  },
  {
    id: 2,
    title: "Super Mario Odyssey",
    genre: "Platformer",
    score: 97
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    genre: "Action RPG",
    score: 96
  }
];

// Méthode 1: Simple console.log
games.forEach(game => {
  Object.entries(game).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
});
