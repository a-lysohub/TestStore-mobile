import { StyleSheet } from 'react-native';
import { palette } from './palette';

export class RobotoFont {
  static light = 'Roboto-Light';
  static regular = 'Roboto-Regular';
  static medium = 'Roboto-Medium';
  static bold = 'Roboto-Bold';
}

export const typography = StyleSheet.create({
  button: {
    fontFamily: RobotoFont.regular,
    fontWeight: '900',
    fontSize: 15,
  },
  item: {
    fontFamily: RobotoFont.regular,
    fontWeight: '600',
    fontSize: 15,
  },
  titleModal: {
    fontFamily: RobotoFont.bold,
    fontWeight: '700',
    fontSize: 15,
  },
  title: {
    fontFamily: RobotoFont.bold,
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.white,
  },
  price: {
    fontFamily: RobotoFont.bold,
    fontSize: 20,
    fontWeight: 'bold',
    color: palette.black,
  },
  captionSmall: {
    fontFamily: RobotoFont.regular,
    fontWeight: '500',
    fontSize: 14,
    color: palette.ocean,
  },
  error: {
    fontFamily: RobotoFont.regular,
    fontSize: 10,
    fontWeight: '400',
    color: palette.red,
  },
});
