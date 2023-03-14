import { getStaticProps } from 'pages/laptops';
import { mockLaptopsData } from '__mocks__/mockLaptops';
import { instance } from 'api/api';

describe('Laptops page', () => {
  beforeEach(() => jest.clearAllMocks());
  test('getStaticProps returns the correct data from the api', async () => {
    jest.spyOn(instance, 'get').mockImplementation(async() =>({
      data: mockLaptopsData
    }));

    const response = await getStaticProps();

    expect(instance.get).toHaveBeenCalled();
    expect(response).toEqual({
      props: {
        laptops: mockLaptopsData
      }
    })
  });
});
