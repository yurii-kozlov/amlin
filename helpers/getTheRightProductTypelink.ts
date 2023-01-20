export const getTheRightProductTypelink = (productName: string): string =>
  `${productName.split(' ')[0].toLowerCase()}s`;
