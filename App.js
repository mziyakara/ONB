import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/screens/Navigation';
import {Provider} from 'jotai';

const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;
