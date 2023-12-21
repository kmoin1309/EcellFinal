import React, { useState, useEffect } from 'react';

const CounterAnimation = ({ targetValue }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const duration = 500; // Animation duration in milliseconds
    const interval = 5; // Interval between animation steps in milliseconds
    const step = targetValue / (duration / interval);
    let currentValue = 0;

    const updateCounter = () => {
      currentValue += step;
      setCounter(Math.floor(currentValue));

      if (currentValue < targetValue) {
        requestAnimationFrame(updateCounter);
      } else {
        setCounter(targetValue);
      }
    };

    updateCounter();
  }, [targetValue]);

  return <span>{counter}</span>;
};

export default CounterAnimation;
