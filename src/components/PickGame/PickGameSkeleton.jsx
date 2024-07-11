import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const PickGameSkeleton = () => {
  const cards = [0, 1, 2, 3, 4];
  const [allCardsVisible, setAllCardsVisible] = useState(false);
  const [finalAnimation, setFinalAnimation] = useState(false);
  const [allDone, setAllDone] = useState(false);

  const handleAnimationComplete = idx => {
    if (idx === cards.length - 1) {
      setAllCardsVisible(true);
      // Запуск финальной анимации через задержку
      setTimeout(() => setFinalAnimation(true), 1000); // задержка перед финальной анимацией
      setTimeout(() => setAllDone(true), 2500);
    }
  };

  return (
    <div
      className={clsx(
        'gap-4 absolute top-80 left-1/2 -translate-x-1/2',
        allDone ? 'hidden' : 'flex'
      )}
    >
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          className="card__backSide pointer-events-none"
          initial={{ opacity: 0 }}
          animate={
            allCardsVisible
              ? idx === 2
                ? finalAnimation
                  ? {
                      opacity: 0,
                      y: -200,
                      rotateY: 180,
                      borderColor: '#FFD369',
                    }
                  : { opacity: 1, scale: 1.2 }
                : { opacity: 0 }
              : { opacity: 1 }
          }
          transition={{ duration: 1, ease: 'easeInOut', delay: idx * 0.3 }}
          onAnimationComplete={() => handleAnimationComplete(idx)}
        />
      ))}
    </div>
  );
};

export default PickGameSkeleton;
