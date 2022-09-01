// import React from 'react';
// import MainNavigation from './src/navigation';

// import {Provider} from 'react-redux';
// import Store from './src/redux/store/store';
// const App = () => {
//   return (
//     <Provider store={Store}>
//       <MainNavigation />
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import MainNavigation from './src/navigation';

import {Provider} from 'react-redux';
import Store, {persistor} from './src/redux/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
