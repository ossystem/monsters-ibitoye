import React from 'react';
import { Provider } from 'react-redux';

import AppWrapper from './container/AppWrapper';
import store from './store';

export default function App() {

  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
};
