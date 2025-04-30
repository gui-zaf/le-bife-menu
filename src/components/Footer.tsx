import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { footerStyles } from '../styles/footerStyles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Footer = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeTab, setActiveTab] = useState<'menu' | 'favorites'>('menu');

  const handleMenuPress = () => {
    setActiveTab('menu');
    navigation.navigate('Main');
  };

  const handleFavoritesPress = () => {
    setActiveTab('favorites');
    navigation.navigate('Favorites');
  };

  return (
    <View style={footerStyles.footer}>
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="chatbubble-outline" size={24} color="#000" style={{ opacity: 0.3 }} />
        <Text style={[footerStyles.footerText, { opacity: 0.3 }]}>Chat</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="person-outline" size={24} color="#000" style={{ opacity: 0.3 }} />
        <Text style={[footerStyles.footerText, { opacity: 0.3 }]}>Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="home-outline" size={24} color="#000" style={{ opacity: 0.3 }} />
        <Text style={[footerStyles.footerText, { opacity: 0.3 }]}>Inicio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={footerStyles.footerItem}
        onPress={handleMenuPress}
      >
        <Ionicons 
          name="restaurant-outline" 
          size={24} 
          color={activeTab === 'menu' ? "#DA2727" : "#000"} 
        />
        <Text style={[
          footerStyles.footerText,
          activeTab === 'menu' && footerStyles.activeText
        ]}>
          Menu
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={footerStyles.footerItem}
        onPress={handleFavoritesPress}
      >
        <Ionicons 
          name="heart-outline" 
          size={24} 
          color={activeTab === 'favorites' ? "#DA2727" : "#000"} 
        />
        <Text style={[
          footerStyles.footerText,
          activeTab === 'favorites' && footerStyles.activeText
        ]}>
          Favoritos
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer; 