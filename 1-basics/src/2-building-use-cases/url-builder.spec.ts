import { buildUrl } from './url-builder';

describe('buildUrl', () => {
  const emptyQueryParams = {};

  const queryParamsWithSingleItem = {
    fbClickId: new Date().getDate().toString(),
  };

  const queryParamsWithMultipleItem = {
    ...queryParamsWithSingleItem,
    origin: 'facebook',
  };

  it('returns base url if query parameters are not passed', () => {
    expect(buildUrl('https://www.google.com')).toBe('https://www.google.com');
  });

  it('returns base url if query parameters object is empty', () => {
    expect(buildUrl('https://www.google.com', {})).toBe(
      'https://www.google.com'
    );
  });

  it('adds single query parameter to base url', () => {
    expect(buildUrl('https://www.google.com', { fizz: 'buzz' })).toBe(
      'https://www.google.com?fizz=buzz'
    );
  });

  it('adds multiple query parameters to base url', () => {
    expect(
      buildUrl('https://www.google.com', { fizz: 'buzz', foo: 'bar' })
    ).toBe('https://www.google.com?fizz=buzz&foo=bar');
  });
});
