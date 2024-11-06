import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Text, View } from 'react-native';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
const Tab = createBottomTabNavigator();
export default function BottomtabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
          color =  focused ? '#ff4f01' : '#acabb1' 
          size = focused ? 25 : 20
        } else if (route.name === 'Search') {
          iconName ='search';
          color =  focused ? '#ff4f01' : '#acabb1' 
          size = focused ? 25 : 20
        } else if (route.name === 'Cart') {
          iconName = 'shopping-cart'; 
          color =  focused ? '#ff4f01' : '#acabb1' 
          size = focused ? 25 : 20 
        } else if (route.name === 'Profile') {
          iconName = 'user'; 
          color =  focused ? '#ff4f01' : '#acabb1'  
          size = focused ? 25 : 20
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarLabel: ({ focused, color }) => {
        let size
        {if (route.name === 'Home') {
          color =  focused ? '#ff4f01' : '#acabb1' 
        } else if (route.name === 'Search') {
          color =  focused ? '#ff4f01' : '#acabb1' 
        } else if (route.name === 'Cart') {
          color =  focused ? '#ff4f01' : '#acabb1'  
        } else if (route.name === 'Profile') {
          color =  focused ? '#ff4f01' : '#acabb1'  
        }}
        return (
          <Text style={{ color: color, fontSize: size, fontWeight:'600' }}>
            {route.name}
          </Text>
        );
      },
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
      },
    })}
    >
        <Tab.Screen options={{ headerShown: false }}  name="Home" component={HomeScreen} />
        <Tab.Screen options={{ headerShown: false }}  name="Cart" component={CartScreen} />
        <Tab.Screen options={{ headerShown: false }}  name="Search" component={SearchScreen} />
        <Tab.Screen options={{ headerShown: false }}  name="Profile" component={PaymentScreen} />
      </Tab.Navigator>
  )
}