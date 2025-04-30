import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { screenStyles } from '../styles/screenStyles';
import { useFavorites } from '../contexts/FavoritesContext';
import { useCart } from '../contexts/CartContext';

interface FavoriteItemProps {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
  category: string;
}

const FavoriteItem: React.FC<FavoriteItemProps> = ({
  id,
  name,
  price,
  description,
  image,
  category,
}) => {
  const navigation = useNavigation();
  const { toggleFavorite } = useFavorites();
  const { toggleCartItem, items } = useCart();
  const isInCart = items.some(item => item.id === id);

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

  const handleCartToggle = () => {
    toggleCartItem({
      id,
      name,
      price,
      image,
    });
  };

  return (
    <TouchableOpacity 
      style={screenStyles.cartItem}
      onPress={handlePress}
    >
      <Image 
        source={image} 
        style={screenStyles.cartItemImage} 
      />
      <View style={screenStyles.cartItemDetails}>
        <Text style={screenStyles.cartItemName}>{name}</Text>
        <Text style={screenStyles.cartItemPrice}>{price}</Text>
      </View>
      <View style={screenStyles.quantityContainer}>
        <TouchableOpacity
          onPress={() => toggleFavorite({ id, name, price, description, image, category })}
          style={screenStyles.removeButton}
        >
          <Ionicons name="heart" size={24} color="#DA2727" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCartToggle}
          style={screenStyles.quantityButton}
        >
          <Ionicons 
            name={isInCart ? 'checkmark-circle' : 'add-circle-outline'} 
            size={24} 
            color={isInCart ? '#DA2727' : '#000'} 
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteItem; 