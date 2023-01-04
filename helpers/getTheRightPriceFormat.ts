export const getTheRightPriceFormat = (input: number): string =>
new Intl.NumberFormat('en-IN').format(input)
