import React, {SyntheticEvent} from 'react';
import {View} from 'react-native';
import {useFormik} from 'formik';
import {useTranslation} from 'react-i18next';

import {useAddProducts} from './hooks/useAddProducts';

import {addNewProductSchema} from '@app/services';

import {Textarea} from '@app/components';
import {Input} from '@app/components';
import {Button} from '@app/components';

import {addProductStyles} from './addProduct.styles';

const AddProductForm = () => {
	const {t} = useTranslation();
	const onSubmit = useAddProducts();

	const formik = useFormik({
		initialValues: {
			title: '',
			price: 0.0,
			description: '',
		},
		onSubmit,
		validationSchema: addNewProductSchema,
	});

	const onDescriptionBlur = (e: SyntheticEvent) => {
		formik.handleBlur('description')(e);
		formik.setFieldValue(
			'description',
			formik.values.description.trim()
		);
	};

	return (
		<View style={addProductStyles.container}>
			<Input
				fullBordered
				label={t('addNewForm.titleLabel')}
				placeholder={t('addNewForm.title')}
				setValue={formik.handleChange('title')}
				onBlur={formik.handleBlur('title') as () => void}
				value={formik.values.title}
				error={
					formik.touched.title ? formik.errors.title : ''
				}
			/>
			<Input
				fullBordered
				label={t('addNewForm.priceLabel')}
				placeholder={t('addNewForm.price')}
				setValue={formik.handleChange('price')}
				value={formik.values.price.toString()}
				error={
					formik.touched.price ? formik.errors.price : ''
				}
			/>
			<Textarea
				label={t('addNewForm.descriptionLabel')}
				placeholder={t('addNewForm.description')}
				onChange={formik.handleChange('description')}
				onBlur={onDescriptionBlur as () => void}
				value={formik.values.description}
				errorCode={
					formik.touched.description
						? formik.errors.description
						: ''
				}
			/>
			<Button
				onPress={formik.submitForm}
				title={t('add')}
				width={150}
			/>
		</View>
	);
};

export default AddProductForm;
