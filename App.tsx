import React from 'react';
import './src/assets/i18n/i18n';

import Navigation from './src/Navigation';
import {store, persistor} from './src/redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
