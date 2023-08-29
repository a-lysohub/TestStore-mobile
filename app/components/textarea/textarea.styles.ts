import { StyleSheet } from 'react-native';

import { palette, paletteRgba, spacing } from '@app/theme';

export const textareaStyles = StyleSheet.create({
    label: {
        color: palette.ocean,
        paddingLeft: spacing[0],
    },
    textArea: {
        borderWidth: 2,
        borderColor: paletteRgba.ocean70,
        borderRadius: spacing[0],
        backgroundColor : palette.lightGrey,
        textAlignVertical: 'top',
        height: 130,
        width: 300,
        paddingLeft: spacing[2],
    },
    errorMessage: {
        width: '100%',
        paddingHorizontal: spacing[1],
    },
});
