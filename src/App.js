import React from 'react';
import Routes from './Routes';
import {Provider} from 'react-redux';

import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
