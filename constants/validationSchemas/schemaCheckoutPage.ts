import * as yup from 'yup';

export interface checkoutPageFormInputs {
  email: string,
  firstName: string,
  lastName: string,
  company: string,
  street1: string,
  street2: string,
  city: string,
  region: string,
  zipCode: number,
  phoneNumber: number,
  shippingAddress: string
}

export const schemaCheckoutPage = yup.object().shape({
  email: yup
    .string()
    .required('This field is required')
    .email('Please enter a valid email address')
    .min(5, 'Please enter at least 5 characters'),
  firstName: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  lastName: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  company: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  street1: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  street2: yup
    .string()
    .required('This field is required')
    .min(8, 'Please enter at least 8 characters'),
  city: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  region: yup
    .string()
    .required('This field is required')
    .min(2, 'Please enter at least 2 characters'),
  zipCode: yup
    .number()
    .typeError("That doesn't look like a zip/postal code")
    .positive("A zip/postal code can't start with a minus")
    .integer("A zip/postal code can't include a decimal point")
    .required('This field is required'),
  phoneNumber: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('This field is required')
});
