import React from 'react';
import Router from './routers/router';
import { Provider } from 'react-redux';
import { store } from './redux/redux';

const App = () => (
  <Provider store={store}>
    <Router/>
  </Provider>
);

export default App;
