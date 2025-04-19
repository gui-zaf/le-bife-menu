import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const entradasItems = [
  {
    id: 'filet-mignon-aperitivo',
    name: 'Filet Mignon Aperitivo à Provençal',
    price: 'R$ 99,00',
    description: 'Filet mignon em cubos grelhados com ervas de Provença, uma entrada sofisticada.',
    image: require('../../assets/filet-mignon-aperitivo-a-provencal-99.png'),
    category: 'entradas',
  },
  {
    id: 'linguica-calabresa',
    name: 'Linguiça Calabresa',
    price: 'R$ 89,00',
    description: 'Linguiça calabresa grelhada, servida com mostarda e pão artesanal.',
    image: require('../../assets/linguica-calabresa-89.png'),
    category: 'entradas',
  },
  {
    id: 'mini-hamburgueres',
    name: 'Mini Hamburgueres com Batata Portuguesa',
    price: 'R$ 80,00',
    description: 'Mini hambúrgueres artesanais servidos com batata portuguesa crocante.',
    image: require('../../assets/mini-hamburgueres-com-batata-portuguesa-80.jpg'),
    category: 'entradas',
  },
];

const EntradasScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    return () => {
      setIsVisible(false);
    };
  }, []);

  if (!isVisible) {
    return (
      <View style={screenStyles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={screenStyles.container}>
      {entradasItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default EntradasScreen; 