import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { screenStyles } from '../styles/screenStyles';
import { useFavorites } from '../contexts/FavoritesContext';
import FavoriteItem from '../components/FavoriteItem';

const FavoritesScreen = () => {
  const { favorites } = useFavorites();

  return (
    <View style={screenStyles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={screenStyles.foodDetailContent}>
          <Text style={screenStyles.foodDetailName}>Favoritos</Text>
          {favorites.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons 
                name="heart-outline" 
                size={120} 
                color="#DA2727" 
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>Você ainda não tem favoritos</Text>
              <View style={styles.instructionContainer}>
                <Text style={styles.instructionText}>
                  Clique em 
                </Text>
                <Ionicons name="heart-outline" size={16} color="#666" />
                <Text style={styles.instructionText}>
                  para adicionar o produto aos favoritos
                </Text>
              </View>
            </View>
          ) : (
            <View style={styles.favoritesContainer}>
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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    height: '100%',
    width: '100%',
  },
  emptyIcon: {
    marginBottom: 20,
    opacity: 0.2,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 10,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  favoritesContainer: {
    marginTop: 20,
    paddingHorizontal: 0,
  },
});

export default FavoritesScreen; 