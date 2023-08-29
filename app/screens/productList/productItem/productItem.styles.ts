import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const productItemStyles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    width: 150,
    height: 170,
    padding: spacing[0],
    margin: spacing[0],
    borderColor: palette.middleGrey,
    borderWidth: 1,
  },
  title: {
    height: spacing[6],
    color: palette.ocean,
    justifyContent: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  img: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  price: {
    position: 'absolute',
    bottom: spacing[0],
    right: spacing[0],
  },
});
