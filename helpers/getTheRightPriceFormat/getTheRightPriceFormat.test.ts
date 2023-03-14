import { getTheRightPriceFormat } from './getTheRightPriceFormat';

describe('getTheRightPriceFormat', () => {
  test('Correct format', () => {
    expect(getTheRightPriceFormat(16999)).toBe('16,999');
    expect(getTheRightPriceFormat(654321.987)).toBe('6,54,321.987');
    expect(getTheRightPriceFormat(121243534523)).toBe('1,21,24,35,34,523');
    expect(getTheRightPriceFormat(17999)).not.toBe('17999');
  });
})
