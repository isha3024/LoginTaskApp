import React from 'react';
import { MainStackNavigation } from './navigation';
import { MainContextProvider } from './contexts/MainContext';

const App = () => {
  return (
    <MainContextProvider>
      <MainStackNavigation />
    </MainContextProvider>
  );
};

export default App;