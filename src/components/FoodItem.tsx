import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { foodItemStyles } from '../styles/foodItemStyles';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

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
  const navigation = useNavigation();
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

  const handlePress = () => {
    navigation.navigate('FoodDetails', {
      id,
      name,
      price,
      description,
      image,
      category,
    });
  };

  return (
    <TouchableOpacity 
      style={foodItemStyles.itemContainer}
      onPress={handlePress}
    >
      <Image 
        source={image} 
        style={foodItemStyles.itemImage} 
      />
      <View style={foodItemStyles.itemContent}>
        <View style={foodItemStyles.itemHeader}>
          <Text style={foodItemStyles.itemName} numberOfLines={1} ellipsizeMode="tail">
            {name}
          </Text>
          <View style={foodItemStyles.itemActions}>
            <TouchableOpacity 
              onPress={() => toggleFavorite({ id, name, price, description, image, category })}
              style={foodItemStyles.actionButton}
            >
              <Ionicons 
                name={isFavorite(id) ? 'heart' : 'heart-outline'} 
                size={24} 
                color={isFavorite(id) ? '#DA2727' : '#000'} 
              />
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={handleCartToggle}
              style={foodItemStyles.actionButton}
            >
              <Ionicons 
                name={isInCart ? 'checkmark-circle' : 'add-circle-outline'} 
                size={24} 
                color={isInCart ? '#DA2727' : '#000'} 
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={foodItemStyles.itemDescription} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <Text style={foodItemStyles.itemPrice}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodItem; 