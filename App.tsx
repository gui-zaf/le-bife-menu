import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Header';
import TopTabNavigator from './src/navigation/TopTabNavigator';
import Footer from './src/components/Footer';
import { appStyles } from './src/styles/appStyles';

export default function App() {
  return (
    <SafeAreaView style={appStyles.container}>
      <NavigationContainer>
        <View style={appStyles.content}>
          <Header />
          <TopTabNavigator />
        </View>
        <Footer />
      </NavigationContainer>
    </SafeAreaView>
  );
}
