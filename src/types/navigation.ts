import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: undefined;
  FoodDetails: {
    id: string;
    name: string;
    price: string;
    description: string;
    image: any;
    category: string;
  };
  Cart: undefined;
  Favorites: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 