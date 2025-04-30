import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { headerStyles } from '../styles/headerStyles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Header = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.headerContent}>
        <View style={headerStyles.placeholder} />
        <Image 
          source={require('../../assets/logo-le-bife.png')} 
          style={headerStyles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity 
          style={headerStyles.cartButton}
          onPress={() => navigation.navigate('Cart')}
        >
          <Ionicons name="cart-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header; 