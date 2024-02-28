// App.js
import React from 'react';
import { UserSettingsProvider } from './context/UserSettingsContext';

import ThemedContent from './components/ThemedContent';


const App = () => {
  return (
    <UserSettingsProvider>
      <div>

        <ThemedContent />

      
      </div>
    </UserSettingsProvider>
  );
};

export default App;

