import { useContext } from 'react';
import { PlayPikContext } from '../../provider/PlapPikProvider';

export const usePlayPik = () => {
  return useContext(PlayPikContext);
};
