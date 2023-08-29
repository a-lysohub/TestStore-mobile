import { StyleSheet } from 'react-native';

import { palette, spacing } from '@app/theme';

export const underlinedButtonStyles = StyleSheet.create({
    button: {
        height: spacing[6],
        alignItems: 'center',
        justifyContent: 'center',
        margin: spacing[4],
    },
    label: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: palette.darkGrey,
    },
});
