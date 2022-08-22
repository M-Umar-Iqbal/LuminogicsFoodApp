import React from 'react';
import MainNavigation from './src/navigation';
import {AuthProvider} from './src/providers/provider';

const App = () => {
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
};

export default App;
