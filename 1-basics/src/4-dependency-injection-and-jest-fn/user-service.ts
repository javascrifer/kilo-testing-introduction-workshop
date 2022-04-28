import { HTTPClient, User } from './types';

export class UserService {
  constructor(private readonly httpClient: HTTPClient) {}

  fetchUser(id: string) {
    return this.httpClient.get<User>(`/user/${id}`);
  }
}
