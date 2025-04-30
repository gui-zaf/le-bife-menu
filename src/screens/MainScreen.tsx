import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import TopTabNavigator from '../navigation/TopTabNavigator';
import Footer from '../components/Footer';
import { appStyles } from '../styles/appStyles';

const MainScreen = () => {
  return (
    <View style={appStyles.container}>
      <View style={appStyles.content}>
        <Header />
        <TopTabNavigator />
      </View>
      <Footer />
    </View>
  );
};

export default MainScreen; 