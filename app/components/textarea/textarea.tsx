import React from 'react';
import {Text, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

import {TextareaProps} from './textarea.props';
import {textareaStyles} from './textarea.styles';

import {paletteRgba} from '@app/theme';
import {typography} from '@app/theme';

export const Textarea: React.FC<TextareaProps> = ({
	label = '',
	placeholder = '',
	errorCode = '',
	value = '',
	onChange = () => {},
	onBlur = () => {},
}) => {
	const {t} = useTranslation();
	const error = errorCode && t(errorCode);

	return (
		<>
			{!!label && (
				<Text
					style={[
						textareaStyles.label,
						typography.captionSmall,
					]}>
					{label}
				</Text>
			)}
			<TextInput
				multiline
				numberOfLines={8}
				placeholder={placeholder}
				placeholderTextColor={paletteRgba.black50}
				style={textareaStyles.textArea}
				onChangeText={onChange}
				onBlur={onBlur}
				value={value}
			/>
			{!!error && (
				<Text style={textareaStyles.errorMessage}>
					{error}
				</Text>
			)}
		</>
	);
};
