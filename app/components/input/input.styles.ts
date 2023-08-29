import { StyleSheet } from 'react-native';

import { palette, paletteRgba, spacing } from '@app/theme';

export const inputStyles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    marginVertical: spacing[2],
  },
  fullBordered: {
    borderWidth: 2,
    borderColor: paletteRgba.ocean70,
    borderRadius: spacing[0],
    paddingLeft: spacing[2],
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderColor: palette.ocean,
  },
  input: {
    justifyContent: 'center',
    width: 300,
    height: spacing[6],
  },
  label: {
    color: palette.ocean,
    paddingLeft: spacing[0],
  },
});
