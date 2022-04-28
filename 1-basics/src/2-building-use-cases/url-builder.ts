export interface QueryParams {
  [key: string]: string | number;
}

function buildQuery(queryParams: QueryParams) {
  return Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}

export function buildUrl(baseUrl: string, queryParams?: QueryParams) {
  const query = Object.keys(queryParams).length ? buildQuery(queryParams) : '';

  return query ? `${baseUrl}?${queryParams}` : baseUrl;
}
