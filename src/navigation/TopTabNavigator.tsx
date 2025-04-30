import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import { topTabNavigatorStyles } from '../styles/topTabNavigatorStyles';
import NewsScreen from '../screens/NewsScreen';
import CombosScreen from '../screens/CombosScreen';
import StartersScreen from '../screens/StartersScreen';
import SidesScreen from '../screens/SidesScreen';
import ExtrasScreen from '../screens/ExtrasScreen';
import DessertsScreen from '../screens/DessertsScreen';
import WinesScreen from '../screens/WinesScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <View style={topTabNavigatorStyles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: topTabNavigatorStyles.tabBar,
          tabBarIndicatorStyle: topTabNavigatorStyles.indicator,
          tabBarLabelStyle: topTabNavigatorStyles.label,
          tabBarActiveTintColor: '#DA2727',
          tabBarInactiveTintColor: '#000',
          tabBarPressColor: '#DA2727',
          tabBarItemStyle: topTabNavigatorStyles.tabItem,
          tabBarGap: 16,
          lazy: false,
        }}
      >
        <Tab.Screen 
          name="Novidades" 
          component={NewsScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Novidades
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Entradas" 
          component={StartersScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Entradas
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Combos" 
          component={CombosScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Combos
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Acompanhamentos" 
          component={SidesScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Acompanhamentos
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Extras" 
          component={ExtrasScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Extras
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Sobremesas" 
          component={DessertsScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Sobremesas
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="Vinhos" 
          component={WinesScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <View style={topTabNavigatorStyles.labelContainer}>
                <Text style={[topTabNavigatorStyles.label, { color: focused ? '#DA2727' : '#000' }]} numberOfLines={1}>
                  Vinhos
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default TopTabNavigator; 