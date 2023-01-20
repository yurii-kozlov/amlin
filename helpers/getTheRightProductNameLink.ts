export const getTheRightProductNameLink = (productName: string): string => {
  if (productName.includes('/')) {
    const indexOfSlash = productName.indexOf('/');

    return productName.slice(0, indexOfSlash);
  }

  return productName;
};
