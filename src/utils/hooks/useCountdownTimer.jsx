import { useState } from 'react';

const useCountdownTimer = (initialValues, interval) => {
  const [countdown, setCountdown] = useState(initialValues);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setCountdown(3);
    const timerId = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(timerId);
          return;
        }
        return prev - 1;
      });
    }, interval);
    setTimer(timerId);
  };

  const resetTimer = () => {
    clearInterval(timer);
  };
  return { countdown, startTimer, resetTimer };
};

export default useCountdownTimer;
