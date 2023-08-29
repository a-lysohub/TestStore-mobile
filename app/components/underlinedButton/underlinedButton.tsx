import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {UnderlineButtonProps} from './underlinedButton.props';
import {underlinedButtonStyles} from './underlinedButton.styles';

import {typography} from '@app/theme';

export const UnderlinedButton: React.FC<
	UnderlineButtonProps
> = ({label, onPress}) => {
	return (
		<TouchableOpacity
			onPress={() => onPress()}
			activeOpacity={0.8}
			style={underlinedButtonStyles.button}>
			<Text
				style={[
					underlinedButtonStyles.label,
					typography.button,
				]}>
				{label}
			</Text>
		</TouchableOpacity>
	);
};
