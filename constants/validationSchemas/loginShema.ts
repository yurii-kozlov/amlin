import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required('This field is required')
    .min(4, 'Please enter at least four characters')
    .email('Please enter a valid email address'),
  password: yup
    .string()
    .required('This field is required')
});
