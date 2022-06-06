export interface User {
  id: string;
}

export interface HTTPClient {
  get: <T = unknown>(url: string) => Promise<T>;
}

export interface UserServiceInterface {
  fetchUser: (id: string) => Promise<User>;
}
