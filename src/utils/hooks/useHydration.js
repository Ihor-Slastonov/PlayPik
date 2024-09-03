import { useState, useEffect } from 'react';
import usePlaypikStore from '../../zustand/usePlaypikStore';

const useHydration = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsubHydrate = usePlaypikStore.persist.onHydrate(() => {
      setHydrated(false);
    });

    const unsubFinishHydration = usePlaypikStore.persist.onFinishHydration(
      () => {
        setHydrated(true);
        console.log('Hydration complete');
      }
    );

    setHydrated(usePlaypikStore.persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return hydrated;
};

export default useHydration;
