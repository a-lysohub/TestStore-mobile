import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ButtonProps } from './button.props';
import { buttonStyles } from './button.styles';

import {palette, typography} from '@app/theme';

export const Button: FC<ButtonProps> = ({
  disabled = false,
  title = '',
  width,
  onPress,
  customStyles,
  children,
}) => {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.button,
        !!width && { width },
        disabled && buttonStyles.transparent,
        customStyles,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <LinearGradient
        colors={[palette.darkGrey, palette.middleGrey]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={buttonStyles.gradient}
      >
        {children}
        {!!title && (
          <Text
            allowFontScaling={false}
            style={[typography.button, {
              color: palette.white,
            }]}
          >
            {title}
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

// export default Button;
