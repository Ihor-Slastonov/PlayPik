export const pickGame = games => {
    const randomIndex = Math.floor(Math.random() * games.length);
    
  return games[randomIndex];
};
