import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const vinhosItems = [
  {
    id: 'la-nave-primitivo',
    name: 'La Nave Primitivo Igt',
    price: 'R$ 139,00',
    description: 'Vinho tinto italiano da região da Puglia, com notas de frutas maduras e taninos suaves.',
    image: require('../../assets/la-nave-primitivo-igt-139.jpeg'),
    category: 'vinhos',
  },
  {
    id: 'rendez-vous-merlot-cabernet',
    name: 'Vinho Rendez-vous Merlot Cabernet Sauvignon',
    price: 'R$ 149,00',
    description: 'Blend francês elegante com notas de frutas negras e taninos equilibrados.',
    image: require('../../assets/rendez-vous-merlot-cabernet-sauvignon-149.png'),
    category: 'vinhos',
  },
  {
    id: 'carlos-serres-tempranillo',
    name: 'Carlos Serres Jovem - Tempranillo',
    price: 'R$ 139,00',
    description: 'Vinho espanhol da região de Rioja, com notas de frutas vermelhas e especiarias.',
    image: require('../../assets/carlos-serres-jovem-tempranillo-139.png'),
    category: 'vinhos',
  },
  {
    id: 'bourgogne-pinot-noir',
    name: 'Bourgogne Pinot Noir',
    price: 'R$ 189,00',
    description: 'Vinho francês da Borgonha, elegante e complexo com notas de frutas vermelhas e terra.',
    image: require('../../assets/bourgogne-pinot-noir-189.jpg'),
    category: 'vinhos',
  },
];

const WinesScreen = () => {
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
      {vinhosItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default WinesScreen; 