import { StyleSheet } from 'react-native';

import { palette } from '@app/theme';
import { spacing } from '@app/theme';

export const productListStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: palette.lightGrey,
    },
    productList: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[1],
        marginBottom: spacing[7],
        width: '100%',
    },
});
