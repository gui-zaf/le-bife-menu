import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { headerStyles } from '../styles/headerStyles';

const Header = () => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerContent}>
        <View style={headerStyles.placeholder} />
        <Image 
          source={require('../../assets/logo-le-bife.png')} 
          style={headerStyles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={headerStyles.cartButton}>
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header; 