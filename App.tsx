import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Header';
import StackNavigator from './src/navigation/StackNavigator';
import Footer from './src/components/Footer';
import { appStyles } from './src/styles/appStyles';
import { CartProvider } from './src/contexts/CartContext';
import { FavoritesProvider } from './src/contexts/FavoritesContext';

export default function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <SafeAreaView style={appStyles.container}>
          <NavigationContainer>
            <View style={appStyles.content}>
              <Header />
              <StackNavigator />
            </View>
            <Footer />
          </NavigationContainer>
        </SafeAreaView>
      </FavoritesProvider>
    </CartProvider>
  );
}
