import { getStaticProps } from 'pages/aboutUs';
import { mockAboutUsData } from '__mocks__/mockAboutUs';
import { mockMain } from '__mocks__/mockMain';
import { instance } from 'api/api';

describe('aboutUs', () => {
  test('getStaticProps returns the correct data from api', async () => {
    jest.spyOn(instance, 'get')
      .mockResolvedValueOnce({ data: mockAboutUsData })
      .mockResolvedValueOnce({ data: mockMain })

    const props = await getStaticProps();

    expect(instance.get).toHaveBeenCalled();
    expect(props).toEqual({
      props: {
        aboutUsFeatures: mockAboutUsData,
        main: mockMain
      }
    });
  });
});
