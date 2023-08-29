import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

import {Button} from '@app/components';
import {UnderlinedButton} from '@app/components';

import {ModalProps} from './modal.props';
import {modalStyles} from './modal.styles';

import {typography} from '@app/theme';

export const ModalNotification: React.FC<ModalProps> = ({
	isVisible,
	title,
	text,
	onCancelTitle,
	cancelHandler,
	onSuccessTitle,
	successHandler,
}) => {
	return (
		<Modal
			isVisible={isVisible}
			backdropTransitionOutTiming={0}
			coverScreen={false}
			style={modalStyles.modal}>
			<View style={modalStyles.modalView}>
				<View style={modalStyles.titleContainer}>
					<Text
						style={[
							modalStyles.title,
							typography.titleModal,
						]}>
						{title}
					</Text>
				</View>
				<Text style={modalStyles.textModal}>{text}</Text>
				<View style={modalStyles.buttons}>
					<UnderlinedButton
						label={onCancelTitle}
						onPress={() => cancelHandler()}
					/>
					<Button
						width={100}
						title={onSuccessTitle}
						onPress={() => successHandler()}
					/>
				</View>
			</View>
		</Modal>
	);
};
