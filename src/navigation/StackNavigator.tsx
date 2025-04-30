import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNavigator from './TopTabNavigator';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={TopTabNavigator} />
      <Stack.Screen 
        name="FoodDetails" 
        component={FoodDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Favorites" 
        component={FavoritesScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator; 