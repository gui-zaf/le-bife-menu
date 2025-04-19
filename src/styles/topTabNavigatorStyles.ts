import { StyleSheet } from 'react-native';

export const topTabNavigatorStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#F8F0E1',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#efe7d7',
  },
  tabItem: {
    paddingHorizontal: 16,
  },
  indicator: {
    backgroundColor: '#DA2727',
    height: 3,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textTransform: 'none',
    fontWeight: 'bold',
    flexShrink: 0,
  },
}); 