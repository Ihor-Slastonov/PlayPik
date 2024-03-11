import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const PlayPikContext = createContext();

export const PlayPikProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  return (
    <PlayPikContext.Provider value={{ games, setGames }}>
      {children}
    </PlayPikContext.Provider>
  );
};

PlayPikProvider.propTypes = {
  children: PropTypes.node,
};
