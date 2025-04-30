import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: '#F8F0E1',
    borderBottomWidth: 1,
    borderBottomColor: '#efe7d7',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  placeholder: {
    width: 24,
  },
  logo: {
    width: 120,
    height: 40,
  },
  cartButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
}); 