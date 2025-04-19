import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const acompanhamentosItems = [
  {
    id: 'batata-chips-maison',
    name: 'Batata Chips Maison',
    price: 'R$ 25,00',
    description: 'Batatas fatiadas finamente e fritas até ficarem crocantes, temperadas com sal e ervas.',
    image: require('../../assets/batata-chips-maison-25.png'),
    category: 'acompanhamentos',
  },
  {
    id: 'mix-de-guarnicoes',
    name: 'Mix de Guarnições',
    price: 'R$ 70,00',
    description: 'Seleção de guarnições frescas e coloridas, perfeita para acompanhar qualquer prato.',
    image: require('../../assets/mix-de-guarnicoes-70.jpg'),
    category: 'acompanhamentos',
  },
  {
    id: 'cuscus-marroquino',
    name: 'Cuscus Marroquino',
    price: 'R$ 15,00',
    description: 'Cuscus tradicional marroquino com frutas secas e nozes.',
    image: require('../../assets/cuscus-marroquino-15.png'),
    category: 'acompanhamentos',
  },
  {
    id: 'lasanha-de-berinjela',
    name: 'Lasanha de Berinjela',
    price: 'R$ 36,00',
    description: 'Camadas de berinjela com molho de tomate e queijo, uma opção vegetariana deliciosa.',
    image: require('../../assets/lasanha-de-berinjela-36.png'),
    category: 'acompanhamentos',
  },
  {
    id: 'espinafre-cremoso',
    name: 'Espinafre Cremoso',
    price: 'R$ 40,00',
    description: 'Espinafre refogado com creme de leite e noz-moscada.',
    image: require('../../assets/espinafre-cremoso-40.png'),
    category: 'acompanhamentos',
  },
];

const AcompanhamentosScreen = () => {
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
      {acompanhamentosItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default AcompanhamentosScreen; 