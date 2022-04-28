export interface User {
  id: string;
}

export interface HTTPClient {
  get: <T = unknown>(url: string) => Promise<T>;
}
