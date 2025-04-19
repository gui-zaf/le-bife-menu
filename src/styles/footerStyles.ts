import { StyleSheet } from 'react-native';

export const footerStyles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8F0E1',
    borderTopWidth: 1,
    borderTopColor: '#efe7d7',
    paddingVertical: 8,
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#000',
    marginTop: 4,
  },
  activeText: {
    color: '#DA2727',
  },
}); 