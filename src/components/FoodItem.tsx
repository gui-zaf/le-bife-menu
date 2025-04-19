import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { foodItemStyles } from '../styles/foodItemStyles';

interface FoodItemProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
  category: string;
}

const FoodItem: React.FC<FoodItemProps> = ({
  id,
  name,
  price,
  description,
  image,
  category,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Função para alternar o estado de favorito
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={foodItemStyles.itemContainer}>
      <Image 
        source={image} 
        style={foodItemStyles.itemImage} 
      />
      <View style={foodItemStyles.itemContent}>
        <View style={foodItemStyles.itemHeader}>
          <Text style={foodItemStyles.itemName} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <TouchableOpacity 
            onPress={toggleFavorite}
            style={foodItemStyles.favoriteButton}
          >
            <Ionicons 
              name={isFavorite ? 'heart' : 'heart-outline'} 
              size={24} 
              color={isFavorite ? '#DA2727' : '#000'} 
            />
          </TouchableOpacity>
        </View>
        <Text style={foodItemStyles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <Text style={foodItemStyles.itemPrice}>{price}</Text>
      </View>
    </View>
  );
};

export default FoodItem; 