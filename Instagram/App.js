import React, {useState, useEffect} from 'react';
import Home from './src/screen/Home';
import store from './src/Store';
import {Provider} from 'react-redux';
import MyTabs from './src/navigation/BottomNavigation';
import AppNavigation from './src/navigation/AppNavigation';
const App = () => {
  return (
    <Provider store={store}>
     <AppNavigation/>
    </Provider>
  );
};

export default App;
