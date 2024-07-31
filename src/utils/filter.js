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

const filterGamesByFavorite = (games, gameList) => {
  if (gameList === 'all') return games;
  return games.filter(game => game.favorite === true);
};

export const filterGames = (games, category, type, gameList) => {
  const gamesFilteredByGameList = filterGamesByFavorite(games, gameList);
  const gamesFilteredByCategory = filterGamesByCategory(
    gamesFilteredByGameList,
    category
  );
  return filterGamesByType(gamesFilteredByCategory, type);
};
