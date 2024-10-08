import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import { getNinjaFact } from '../../services/ninjaApi/ninjaApi';

const Fact = () => {
  const [newFact, setNewFact] = useState('');

  useEffect(() => {
    async function getNewFact() {
      const fact = await getNinjaFact();
      if (!fact || typeof fact[0].fact !== 'string')
        return setNewFact(
          '27% of female lottery winners hid their winning ticket in their bras'
        );
      setNewFact(fact[0].fact);
    }

    getNewFact();
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.3,
      }}
      animate={{ opacity: 1, scale: 1, translateX: '-50%' }}
      transition={{ duration: 0.7, ease: 'easeInOut', delay: 5 }}
      className="absolute top-[63%] left-1/2  
      w-80 min-h-28 rounded-lg 
    bg-semi-dark border-2 border-dark origin-bottom"
    >
      <p className="text-xl py-2 px-4 rounded-t-lg  bg-dark">
        Interesting fact:
      </p>
      <p className="text-center px-4 py-2 italic bg-accent rounded-b-lg text-dark">{`" ${newFact} "`}</p>
    </motion.div>
  );
};

export default Fact;
