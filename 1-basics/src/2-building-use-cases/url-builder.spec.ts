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

  it.todo('returns base url if query parameters are not passed');

  it.todo('returns base url if query parameters object is empty');

  it.todo('adds single query parameter to base url');

  it.todo('adds multiple query parameters to base url');
});
