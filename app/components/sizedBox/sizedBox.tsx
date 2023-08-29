import React, { FC, memo } from 'react';
import { View } from 'react-native';

import { SizedBoxProps } from './sizedBox.props';

export const SizedBox: FC<SizedBoxProps> = memo(({ width = 0, height = 0 }) => (
  <View style={{ width, height }} />
));
