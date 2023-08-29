import * as yup from 'yup';

export const ERROR_CODES = {
  FIELD_REQUIRED: 'error.fieldRequired',
  FORMAT_INCORRECT: 'error.formatIncorrect',
  UNKNOWN_ERROR: 'error.unknownError',
};

export const {
  FIELD_REQUIRED,
  FORMAT_INCORRECT,
} = ERROR_CODES;

export const defaultSchema = yup.string();

export const inputValueExists = yup
  .string()
  .required(FIELD_REQUIRED)
  .min(5, FORMAT_INCORRECT);

export const textareaSchema = yup
  .string()
  .required(FIELD_REQUIRED)
  .min(10, FORMAT_INCORRECT);

export const addNewProductSchema = yup.object().shape({
  title: inputValueExists,
  price: yup.number().required(FIELD_REQUIRED),
  description: textareaSchema,
});
