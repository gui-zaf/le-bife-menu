import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const extrasItems = [
  {
    id: 'molho-roquefort',
    name: 'Molho Roquefort',
    price: 'R$ 5,00',
    description: 'Molho cremoso à base de queijo roquefort, perfeito para carnes grelhadas.',
    image: require('../../assets/molho-roquefort.png'),
    category: 'extras',
  },
  {
    id: 'molho-marchand-du-vin',
    name: 'Molho Marchand du Vin',
    price: 'R$ 5,00',
    description: 'Molho clássico francês à base de vinho tinto e manteiga.',
    image: require('../../assets/molho-marchaand-du-vin-5.png'),
    category: 'extras',
  },
  {
    id: 'molho-bearnaise',
    name: 'Molho Béarnaise',
    price: 'R$ 6,00',
    description: 'Molho francês tradicional com estragão e chalota.',
    image: require('../../assets/molho-bearnaise-6.jpg'),
    category: 'extras',
  },
];

const ExtrasScreen = () => {
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
      {extrasItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default ExtrasScreen; 