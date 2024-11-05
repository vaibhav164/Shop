import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from './src/Screens/ProductDetailScreen/ProductDetailScreen';
import PaymentScreen from './src/Screens/PaymentScreen/PaymentScreen';
import CartScreen from './src/Screens/CartScreen/CartScreen';
import BottomtabNavigator from './src/Navigators/BottomtabNavigator';



function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Home" component={BottomtabNavigator} />
        <Stack.Screen  name="ProductDetailScreen" component={ProductDetailScreen} />
        <Stack.Screen  name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen  name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
