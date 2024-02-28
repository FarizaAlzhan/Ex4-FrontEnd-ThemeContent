import React, { createContext, useContext, useState } from 'react';

const TooltipContext = createContext();

export const TooltipProvider = ({ children }) => {
  const [tooltipText, setTooltipText] = useState('');

  const setTooltip = (text) => {
    setTooltipText(text);
  };

  return (
    <TooltipContext.Provider value={{ tooltipText, setTooltip }}>
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltip = () => useContext(TooltipContext);
