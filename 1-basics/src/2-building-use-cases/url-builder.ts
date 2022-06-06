export interface QueryParams {
  [key: string]: string | number;
}

function buildQuery(queryParams: QueryParams) {
  const urlSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(queryParams)) {
    urlSearchParams.append(key, value.toString());
  }

  return urlSearchParams.toString();
}

export function buildUrl(baseUrl: string, queryParams?: QueryParams) {
  const query = Object.keys(queryParams ?? {}).length
    ? buildQuery(queryParams)
    : '';

  return query ? `${baseUrl}?${query}` : baseUrl;
}
