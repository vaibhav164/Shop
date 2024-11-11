import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomtabNavigator from './BottomtabNavigator';
import ProductDetailScreen from '../Screens/ProductDetailScreen/ProductDetailScreen';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomtabNavigator} />

      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ route }) => ({
            tabBarStyle: route.name === 'CartScreen' ? { display: 'none' } : {},
          })}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;
