import React from 'react';
import MainNavigation from './src/navigation';

import {Provider} from 'react-redux';
import Store from './src/redux/store/store';
const App = () => {
  return (
    <Provider store={Store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
