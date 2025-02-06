/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  
  useEffect(() => {
    const targetDate = new Date('2025-03-01T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-8 mb-6">
      {timeLeft.days !== undefined ? (
        <>
          <div className="countdown-timer-item">
            <span className="text-3xl font-semibold">{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="countdown-timer-item">
            <span className="text-3xl font-semibold">{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="countdown-timer-item">
            <span className="text-3xl font-semibold">{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="countdown-timer-item">
            <span className="text-3xl font-semibold">{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </>
      ) : (
        <p className="text-xl">Loading...</p>
      )}
    </div>
  );
}

export default CountdownTimer;
