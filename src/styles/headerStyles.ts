import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#F8F0E1',
    borderBottomWidth: 1,
    borderBottomColor: '#efe7d7',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  placeholder: {
    width: 40,
  },
  logo: {
    width: 120,
    height: 40,
  },
  cartButton: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 