import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import FoodItem from '../components/FoodItem';
import { screenStyles } from '../styles/screenStyles';

const newsItems = [
  {
    id: 'batata-gratin',
    name: 'Batata Gratinada',
    price: 'R$ 36,00',
    description: 'Batatas gratinadas com queijo e creme de leite, assadas até ficarem douradas e crocantes.',
    image: require('../../assets/batata-gratin-36.png'),
    category: 'news',
  },
  {
    id: 'arroz-le-bife',
    name: 'Arroz Le Bife',
    price: 'R$ 40,00',
    description: 'Arroz especial preparado com caldo de carne e temperos selecionados, o acompanhamento perfeito para nossos pratos.',
    image: require('../../assets/arroz-le-bife-40.jpg'),
    category: 'news',
  },
  {
    id: 'cebola-brulle',
    name: 'Cebola Brullèe',
    price: 'R$ 25,00',
    description: 'Cebolas caramelizadas com açúcar mascavo e manteiga, um acompanhamento doce e saboroso.',
    image: require('../../assets/cebola-brulle-25.png'),
    category: 'news',
  },
  {
    id: 'abobora-cabotia',
    name: 'Abóbora Cabotia Assada',
    price: 'R$ 25,00',
    description: 'Abóbora cabotia assada com ervas aromáticas e azeite de oliva, uma opção leve e saborosa.',
    image: require('../../assets/abobora-cabotia-25.png'),
    category: 'news',
  },
  {
    id: 'croque-monsieur',
    name: 'Croque Monsieur',
    price: 'R$ 55,00',
    description: 'Sanduíche francês tradicional com presunto, queijo gruyère e molho bechamel, gratinado até ficar crocante.',
    image: require('../../assets/croque-monsieur-55.png'),
    category: 'news',
  },
  {
    id: 'quiche-de-frango',
    name: 'Quiche de Frango',
    price: 'R$ 45,00',
    description: 'Torta salgada com massa crocante, recheada com frango desfiado, creme de leite e ervas finas.',
    image: require('../../assets/quiche-de-frango-45.png'),
    category: 'news',
  },
];

const NewsScreen = () => {
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
      {newsItems.map((item) => (
        <FoodItem
          key={item.id}
          {...item}
        />
      ))}
    </ScrollView>
  );
};

export default NewsScreen; 