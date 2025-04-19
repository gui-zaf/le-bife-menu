import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { footerStyles } from '../styles/footerStyles';

const Footer = () => {
  return (
    <View style={footerStyles.footer}>
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="chatbubble-outline" size={24} color="#000" />
        <Text style={footerStyles.footerText}>Chat</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="person-outline" size={24} color="#000" />
        <Text style={footerStyles.footerText}>Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="home-outline" size={24} color="#000" />
        <Text style={footerStyles.footerText}>Inicio</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="restaurant-outline" size={24} color="#DA2727" />
        <Text style={[footerStyles.footerText, footerStyles.activeText]}>Menu</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={footerStyles.footerItem}>
        <Ionicons name="heart-outline" size={24} color="#000" />
        <Text style={footerStyles.footerText}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer; 