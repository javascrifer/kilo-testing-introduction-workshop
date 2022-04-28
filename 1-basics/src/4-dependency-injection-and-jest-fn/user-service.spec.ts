import { HTTPClient, User } from './types';
import { UserService } from './user-service';

describe('UserService', () => {
  const user: User = { id: new Date().getTime().toString() };

  const getHTTPCallMock = jest.fn<Promise<User>, []>(() => {
    throw new Error('httpClient.get implementation is not stubbed');
  });

  const httpClientTestKit = { get: getHTTPCallMock };

  const userService: UserService = new UserService(
    httpClientTestKit as HTTPClient
  );

  beforeEach(() => {
    httpClientTestKit.get.mockClear();
    httpClientTestKit.get.mockResolvedValueOnce(user);
  });

  describe('fetchUser', () => {
    it('makes GET HTTP call to the /user endpoint', async () => {
      await userService.fetchUser(user.id);

      expect(httpClientTestKit.get).toHaveBeenCalled();
      expect(httpClientTestKit.get).toHaveBeenCalledWith(`/user/${user.id}`);
    });

    it('returns a user', async () => {
      const expectedUser = user;
      const receivedUser = await userService.fetchUser(user.id);

      expect(receivedUser).toStrictEqual(expectedUser);
    });
  });
});
