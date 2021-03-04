import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/redux/reducer';
import {Provider as PaperProvider} from 'react-native-paper';
import {Main} from './src/navigation';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <Main />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
