import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const sobremesasItems = [
  {
    id: 'brownie-com-sorvete',
    name: 'Brownie com Sorvete de Baunilha',
    price: 'R$ 25,00',
    description: 'Brownie quente servido com sorvete de baunilha e calda de chocolate.',
    image: require('../../assets/brownie-com-sorvete-de-baunilha-25.png'),
    category: 'sobremesas',
  },
  {
    id: 'crepe-de-nutella',
    name: 'Crepe de Nutella',
    price: 'R$ 35,00',
    description: 'Crepe recheado com Nutella e servido com sorvete de baunilha.',
    image: require('../../assets/crepe-de-nutella-35.png'),
    category: 'sobremesas',
  },
  {
    id: 'creme-brullee',
    name: 'Creme Brullèe',
    price: 'R$ 35,00',
    description: 'Creme francês tradicional com caramelo crocante na superfície.',
    image: require('../../assets/creme-brullee-35.png'),
    category: 'sobremesas',
  },
  {
    id: 'mousse-de-chocolate',
    name: 'Mousse de Chocolate Meio Amargo',
    price: 'R$ 35,00',
    description: 'Mousse cremosa de chocolate meio amargo com raspas de chocolate.',
    image: require('../../assets/mousse-de-chocolate-meio-amargo-35.png'),
    category: 'sobremesas',
  },
];

const DessertsScreen = () => {
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
      {sobremesasItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default DessertsScreen; 