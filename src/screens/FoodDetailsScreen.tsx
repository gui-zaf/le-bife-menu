import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { screenStyles } from '../styles/screenStyles';
import { Ionicons } from '@expo/vector-icons';
import ReviewItem from '../components/ReviewItem';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

interface FoodDetailsRouteParams {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
  category: string;
}

const mockReviews = [
  {
    id: '1',
    author: 'João Silva',
    comment: 'Sabor incrível e muito bem preparado. Recomendo!',
    rating: 5,
    date: '15/04/2024',
  },
  {
    id: '2',
    author: 'Maria Santos',
    comment: 'Muito saboroso e com uma apresentação impecável.',
    rating: 5,
    date: '12/04/2024',
  },
  {
    id: '3',
    author: 'Carlos Oliveira',
    comment: 'Uma experiência gastronômica memorável. Vale cada centavo!',
    rating: 5,
    date: '10/04/2024',
  },
  {
    id: '4',
    author: 'Ana Costa',
    comment: 'O sabor é único e a qualidade é excepcional.',
    rating: 4,
    date: '08/04/2024',
  },
  {
    id: '5',
    author: 'Pedro Lima',
    comment: 'Uma das melhores opções do cardápio. Superou minhas expectativas!',
    rating: 5,
    date: '05/04/2024',
  },
];

const FoodDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, price, description, image, id, category } = route.params as FoodDetailsRouteParams;
  const { toggleCartItem, items } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const isInCart = items.some(item => item.id === id);

  const handleCartToggle = () => {
    toggleCartItem({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <ScrollView style={screenStyles.container}>
      <Image 
        source={image} 
        style={screenStyles.foodDetailImage} 
        resizeMode="cover"
      />
      <View style={screenStyles.foodDetailContent}>
        <View style={screenStyles.foodDetailHeader}>
          <Text style={screenStyles.foodDetailName}>{name}</Text>
          <View style={screenStyles.foodDetailActions}>
            <TouchableOpacity 
              style={screenStyles.actionButton}
              onPress={() => toggleFavorite({ id, name, price, description, image, category })}
            >
              <Ionicons 
                name={isFavorite(id) ? 'heart' : 'heart-outline'} 
                size={24} 
                color={isFavorite(id) ? '#DA2727' : '#000'} 
              />
            </TouchableOpacity>
            <TouchableOpacity 
              style={screenStyles.actionButton}
              onPress={handleCartToggle}
            >
              <Ionicons 
                name={isInCart ? 'checkmark-circle' : 'add-circle-outline'} 
                size={24} 
                color={isInCart ? '#DA2727' : '#000'} 
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={screenStyles.foodDetailPrice}>{price}</Text>
        <Text style={screenStyles.foodDetailDescription}>{description}</Text>
        
        <View style={screenStyles.reviewsSection}>
          <Text style={screenStyles.reviewsTitle}>Avaliações</Text>
          {mockReviews.map((review) => (
            <ReviewItem 
              key={review.id} 
              {...review}
              foodName={name}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen; 