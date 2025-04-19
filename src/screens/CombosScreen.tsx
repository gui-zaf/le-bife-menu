import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const combosItems = [
  {
    id: 'strogonoff-de-filet-mignon',
    name: 'Strogonoff de Filet Mignon',
    price: 'R$ 209,00',
    description: 'Filet mignon em tiras com molho cremoso de cogumelos, acompanhado de arroz branco e batata palha.',
    image: require('../../assets/strogonoff-de-fillet-mignon-290.png'),
    category: 'combos',
  },
  {
    id: 'strogonoff-de-frango',
    name: 'Strogonoff de Frango',
    price: 'R$ 139,00',
    description: 'Peito de frango em tiras com molho cremoso de cogumelos, acompanhado de arroz branco e batata palha.',
    image: require('../../assets/strogonoff-de-frango-139.png'),
    category: 'combos',
  },
  {
    id: 'combo-fraldinha',
    name: 'Combo Fraldinha',
    price: 'R$ 260,00',
    description: 'Fraldinha grelhada no ponto, acompanhada de arroz, farofa e vinagrete. Ideal para compartilhar.',
    image: require('../../assets/combo-fraldinha-260.png'),
    category: 'combos',
  },
  {
    id: 'combo-filet-de-salmao',
    name: 'Combo Filet de Salmão',
    price: 'R$ 229,00',
    description: 'Filet de salmão grelhado com molho de ervas, acompanhado de arroz integral e legumes grelhados.',
    image: require('../../assets/combo-filet-de-salmao-229.png'),
    category: 'combos',
  },
  {
    id: 'combo-filet-mignon',
    name: 'Combo Filet Mignon',
    price: 'R$ 260,00',
    description: 'Filet mignon grelhado no ponto, acompanhado de arroz, farofa e vinagrete. A escolha clássica.',
    image: require('../../assets/combo-filet-mignon-260.png'),
    category: 'combos',
  },
  {
    id: 'combo-entrecote-black-angus',
    name: 'Combo Entrecôte Black Angus',
    price: 'R$ 299,00',
    description: 'Entrecôte Black Angus grelhada no ponto, acompanhada de arroz, farofa e vinagrete. A experiência premium.',
    image: require('../../assets/combo-entrecote-black-angus-299.png'),
    category: 'combos',
  },
];

const CombosScreen = () => {
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
      {combosItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default CombosScreen; 