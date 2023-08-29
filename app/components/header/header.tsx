import React from 'react';
import {Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@app/navigation';

import {Title} from '@app/components';

import {HeaderProps} from './header.props';
import {headerStyles} from './header.style';

import {palette} from '@app/theme';
import * as Icons from '@app/assets/icons';

export const Header: React.FC<HeaderProps> = ({
	backBtn = false,
	title = '',
	addNew = false,
	onAddPress,
}) => {
	const navigation = useNavigation();
	const goBack = () => navigation.goBack();

	return (
		<View style={headerStyles.header}>
			<LinearGradient
				colors={[palette.darkGrey, palette.middleGrey]}
				start={{x: 0, y: 0}}
				end={{x: 1, y: 1}}
				style={headerStyles.gradient}>
				{backBtn && (
					<Pressable onPress={goBack}>
						<Icons.ArrowBack />
					</Pressable>
				)}
				{title && <Title title={title} />}
				{addNew && (
					<Pressable onPress={onAddPress}>
						<Icons.Plus />
					</Pressable>
				)}
			</LinearGradient>
		</View>
	);
};
