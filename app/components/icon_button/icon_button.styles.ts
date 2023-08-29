import { StyleSheet } from 'react-native';

import { spacing } from '@app/theme';

export const iconStyles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: spacing[6],
    paddingLeft: spacing[5],
    borderRadius: spacing[4],
  },
});
