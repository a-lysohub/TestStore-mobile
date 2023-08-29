import { StyleSheet } from 'react-native';

import { spacing } from '@app/theme';

export const headerStyles = StyleSheet.create({
    header: {
        width: '100%',
        height: spacing[7],
    },
    gradient: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[2],
    },
});
