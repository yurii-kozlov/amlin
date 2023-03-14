import { getTheRightProductTypelink } from './getTheRightProductTypelink';

describe('getTheRightProductTypelink', () => {
  test('Correct type link', () => {
    expect(getTheRightProductTypelink('Monitor 23.8\\" Philips (243V7QDAB/00) Black'))
      .toBe('monitors');
    expect(getTheRightProductTypelink('Laptop Lenovo V15 (82C700AKRA)'))
      .not.toBe('Laptops');
  });
});
