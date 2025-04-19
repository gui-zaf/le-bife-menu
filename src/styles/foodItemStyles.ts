import { StyleSheet } from 'react-native';

export const foodItemStyles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#efe7d7',
    gap: 16,
    backgroundColor: '#F8F0E1',
  },
  itemImage: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  itemContent: {
    flex: 1,
    gap: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  favoriteButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA2727',
  },
}); 