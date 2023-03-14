import { getTheRightProductNameLink } from './getTheRightProductNameLink';

describe('getTheRightProductNameLink', () => {
  test('Name without slash', () => {
    expect(getTheRightProductNameLink('laptopAsus323')).toBe('laptopAsus323');
  });
  test('Name with slash', () => {
    expect(getTheRightProductNameLink('Monitor 23.8\\" Philips (243V7QDAB/00) Black'))
      .toBe('Monitor 23.8\\" Philips (243V7QDAB');
    expect(getTheRightProductNameLink('Monitor 27\\" Philips (272B8QJEB/00) Black'))
      .not.toBe('Monitor 27\\" Philips (272B8QJEB/00) Black');
  });
});
