import usePlaypikStore from '../usePlaypikStore';

export const gamesSelector = () => usePlaypikStore(state => state.games);
