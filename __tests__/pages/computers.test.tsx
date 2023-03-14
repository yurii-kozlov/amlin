import { getStaticProps } from 'pages/computers';
import { mockComputersData } from '__mocks__/mockComputers';
import { instance } from 'api/api';

describe('Computers page', () => {
  beforeEach(() => jest.clearAllMocks());
  test('getStaticProps returns the correct data from api', async () => {
    jest.spyOn(instance, 'get').mockImplementation(async () => ({
      data: mockComputersData
    }));

    const response = await getStaticProps();
    expect(instance.get).toHaveBeenCalled();
    expect(response).toEqual({
      props: {
        computers: mockComputersData
      }
    });
  })
})
