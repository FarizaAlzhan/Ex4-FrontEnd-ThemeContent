import React, { createContext, useContext, useState } from 'react';

//  контекст для хранения настроек пользователя
const UserSettingsContext = createContext();


export const UserSettingsProvider = ({ children }) => {
  const [userSettings, setUserSettings] = useState({
    theme: 'light', 
  });

  
  const toggleTheme = () => {
    setUserSettings(prevSettings => ({
      ...prevSettings,
      theme: prevSettings.theme === 'light' ? 'dark' : 'light', 
    }));
  };

  return (
    <UserSettingsContext.Provider value={{ userSettings, toggleTheme }}>
      {children}
    </UserSettingsContext.Provider>
  );
};

// Хук для использования настроек пользователя в компонентах
export const useUserSettings = () => useContext(UserSettingsContext);
