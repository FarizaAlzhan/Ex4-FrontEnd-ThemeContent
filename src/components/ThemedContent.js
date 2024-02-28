import React from 'react';
import { useUserSettings } from '../context/UserSettingsContext';
import { TimerPageProvider } from '../context/TimerPageContext'; 
import { TooltipProvider } from '../context/TooltipContext'; 
import TimerPage from './TimerPage';
import Tooltip from './tooltip';
const ThemedContent = () => {
  const { userSettings, toggleTheme } = useUserSettings(); // Добавляем toggleTheme из контекста


  const contentStyle = {
    backgroundColor: userSettings.theme === 'light' ? '#f0f0f0' : '#333',
    color: userSettings.theme === 'light' ? '#333' : '#fff',
    
    height: '100vh', 
    width: '100vw', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={contentStyle}>
      <h1> Web site</h1><br></br>
      
     
     <button onClick={toggleTheme}>
        {userSettings.theme === 'light' ? ' Dark ' : '  Light '}
      </button>
      <TimerPageProvider>
        <TooltipProvider>
          
          <TimerPage />
          <Tooltip content="Top tooltip" position="top">
        <button>tooltip</button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <button>tooltip</button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <button>tooltip</button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <button>tooltip</button>
      </Tooltip>
        </TooltipProvider>
      </TimerPageProvider>
    </div>
  );
};


export default ThemedContent;
