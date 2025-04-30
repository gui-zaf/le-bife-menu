import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FoodItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: any;
  category: string;
}

interface FavoritesContextType {
  favorites: FoodItem[];
  toggleFavorite: (item: FoodItem) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FoodItem[]>([]);

  const toggleFavorite = (item: FoodItem) => {
    setFavorites(prevFavorites => {
      const isAlreadyFavorite = prevFavorites.some(fav => fav.id === item.id);
      if (isAlreadyFavorite) {
        return prevFavorites.filter(fav => fav.id !== item.id);
      }
      return [...prevFavorites, item];
    });
  };

  const isFavorite = (id: string) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}; 