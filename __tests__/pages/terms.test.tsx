import { getStaticProps } from 'pages/terms';
import { mockTerms } from '__mocks__/mockTerms';
import { instance } from 'api/api';

describe('terms', () => {
  beforeEach(() => jest.clearAllMocks());
  test('getStaticProps returns the correct data from api', async () => {
    jest.spyOn(instance, 'get').mockImplementation( async () => ({
      data: mockTerms
    }));

    const response = await getStaticProps();
    expect(instance.get).toHaveBeenCalled();
    expect(response).toEqual({
      props: {
        terms: mockTerms
      }
    });
  });
})
