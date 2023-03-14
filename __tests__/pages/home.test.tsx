import { getStaticProps } from 'pages';
import { mockMonitorsData } from '__mocks__/mockMonitors';
import { mockLaptopsData } from '__mocks__/mockLaptops';
import { mockComputersData } from '__mocks__/mockComputers';
import { mockMain } from '__mocks__/mockMain';
import { instance } from 'api/api';

describe('Home', () => {
  test('getStaticProps returns the correct data from api', async () => {
    jest.spyOn(instance, 'get')
      .mockResolvedValueOnce({ data: mockMain })
      .mockResolvedValueOnce({ data: mockLaptopsData })
      .mockResolvedValueOnce({ data: mockComputersData })
      .mockResolvedValueOnce({ data: mockMonitorsData })

    const products = [...mockLaptopsData.list, ...mockComputersData.list, ...mockMonitorsData.list];

    const props = await getStaticProps();

    expect(instance.get).toHaveBeenCalled();
    expect(props).toEqual({
      props: {
        mainData: mockMain,
        products
      }
    });
  });

});
