const filterGamesByCategory = (games, category) => {
  if (category === 'all') {
    return games;
  } else if (category === 'pc + pc vr') {
    return games.filter(game => game.category !== 'quest');
  } else {
    return games.filter(game => game.category === category);
  }
};

const filterGamesByType = (games, type) => {
  if (type === 'all') {
    return games;
  } else {
    return games.filter(game => game.type === type);
  }
};

export const filterGames = (games, category, type) => {
  const gamesFilteredByCategory = filterGamesByCategory(games, category);
  return filterGamesByType(gamesFilteredByCategory, type);
};
