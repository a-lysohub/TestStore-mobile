import { ViewStyle, StyleProp, TextInputProps } from 'react-native';
import { ReactNode } from 'react';

export type InputProps = {
  label?: string;
  fullBordered?: boolean;
  placeholder?: string;
  value: string | number;
  setValue: (val: string) => void;
  hideText?: boolean;
  customStyles?: StyleProp<ViewStyle>;
  error?: string;
  leading?: ReactNode;
  tail?: ReactNode;
  onPress?: () => void;
  bgWhite?: boolean,
} & TextInputProps;
