import React from 'react';
import {useTranslation} from 'react-i18next';

import {Header} from '@app/components';
import AddProductForm from './addProduct.form';

export const AddProduct = () => {
	const {t} = useTranslation();

	return (
		<>
			<Header backBtn title={t('addNew')} />
			<AddProductForm />
		</>
	);
};
