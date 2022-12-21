import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  email: yup
    .string()
    .required('This field is required')
    .email('Please enter a valid email address'),
  phoneNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('This field is required')
    .required('This field is required'),
  contactMessage: yup
    .string()
    .required('This field is required')
    .min(20, 'Please enter at least 20 characters')
});
