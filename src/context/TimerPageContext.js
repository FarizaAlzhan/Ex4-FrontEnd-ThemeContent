// TimerPageContext.js
import React, { createContext, useContext, useState } from 'react';

const TimerPageContext = createContext();

export const TimerPageProvider = ({ children }) => {
  const [time, setTime] = useState(0);

  const incrementTime = () => {
    setTime(prevTime => prevTime + 1);
  };

  return (
    <TimerPageContext.Provider value={{ time, incrementTime }}>
      {children}
    </TimerPageContext.Provider>
  );
};

export const useTimerPage = () => useContext(TimerPageContext);
