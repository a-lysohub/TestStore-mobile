import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';

import { InputProps } from './input.props';
import { inputStyles } from './input.styles';

import {paletteRgba, typography} from '@app/theme';

export const Input: FC<InputProps> = ({
  label,
  value,
  fullBordered = false,
  setValue,
  placeholder,
  hideText,
  customStyles,
  onPress,
  autoCapitalize = 'none',
  multiline = false,
  ...props
}) => {
  const onFocus = () => { };
  const onBlur = () => { };
  return (
    <>
      <View style={[
        inputStyles.inputContainer]}
      >
      <Text style={inputStyles.label}>{label}</Text>
        <TextInput
          multiline={multiline}
          pointerEvents={onPress ? 'none' : 'auto'}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          style={[
            fullBordered ? inputStyles.fullBordered : inputStyles.bottomBorder,
            inputStyles.input,
            typography.captionSmall,
            customStyles,
          ]}
          onChangeText={setValue}
          placeholderTextColor={paletteRgba.black50}
          selectTextOnFocus={true}
          placeholder={placeholder}
          secureTextEntry={hideText}
          autoCapitalize={autoCapitalize}
          returnKeyType="done"
          {...props}
        />
      </View>
    </>
  );
};
