import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { favoritesStyles } from '../styles/favoritesStyles';
import { useFavorites } from '../contexts/FavoritesContext';
import FavoriteItem from '../components/FavoriteItem';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();

  return (
    <View style={screenStyles.container}>
      <ScrollView style={favoritesStyles.scrollView}>
        <View style={screenStyles.foodDetailContent}>
          <Text style={screenStyles.foodDetailName}>Favoritos</Text>
          {favorites.length === 0 ? (
            <View style={favoritesStyles.emptyContainer}>
              <Ionicons 
                name="heart-outline" 
                size={120} 
                color="#DA2727" 
                style={favoritesStyles.emptyIcon}
              />
              <Text style={favoritesStyles.emptyText}>Você ainda não tem favoritos</Text>
              <View style={favoritesStyles.instructionContainer}>
                <Text style={favoritesStyles.instructionText}>
                  Clique em 
                </Text>
                <Ionicons name="heart-outline" size={16} color="#666" />
                <Text style={favoritesStyles.instructionText}>
                  para adicionar o produto aos favoritos
                </Text>
              </View>
            </View>
          ) : (
            <View style={favoritesStyles.favoritesContainer}>
              {favorites.map((item) => (
                <FavoriteItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  category={item.category}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen; 