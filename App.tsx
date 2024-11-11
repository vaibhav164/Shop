import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/Redux/Store';
import HomeStackNavigator from './src/Navigators/HomStackNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
    </Provider>
  );
}


export default App;
