import React from 'react';
import { Pressable } from 'react-native';

import { IconButtonProps } from './icon_button.props';
import { iconStyles } from './icon_button.styles';

export const IconButton: React.FC<IconButtonProps> = ({ children, onPress = null, customStyles }) => {
  return (
    <Pressable style={iconStyles.container && customStyles} onPress={onPress}>
      {children}
    </Pressable>
  );
};
