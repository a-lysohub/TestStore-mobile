import { StyleSheet } from 'react-native';

import { spacing } from '@app/theme';

export const productDetailsStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: spacing[0],
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  price: {
    width: '100%',
    textAlign: 'right',
    alignItems: 'center',
    paddingRight: spacing[2],
  },
});
