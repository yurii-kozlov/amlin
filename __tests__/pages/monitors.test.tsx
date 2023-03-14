import { getStaticProps } from 'pages/monitors';
import { mockMonitorsData } from '__mocks__/mockMonitors';
import { instance } from 'api/api';

describe('Monitors page', () => {
  beforeEach(() => jest.clearAllMocks())
  test('getStaticProps returns the correct data from api', async () => {
    jest.spyOn(instance, 'get').mockImplementation(async () => ({
      data: mockMonitorsData
    }));

    const response = await getStaticProps();

    expect(instance.get).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
    expect(response).toEqual({
      props: {
        monitors: mockMonitorsData
      }
    })
  })
})
export { mockMonitorsData };

