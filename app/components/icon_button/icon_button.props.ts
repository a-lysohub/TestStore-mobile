import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type IconButtonProps = {
  children: ReactNode;
  onPress: VoidCallback;
  customStyles?: StyleProp<ViewStyle>;
};
