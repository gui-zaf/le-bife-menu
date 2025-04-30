import { StyleSheet } from 'react-native';

export const favoritesStyles = StyleSheet.create({
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