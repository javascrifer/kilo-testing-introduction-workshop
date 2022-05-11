import { getUserController } from './user-controller';
import { User } from './types';

describe('user-controller', () => {
  describe('getUser', () => {
    const fetchUserMock = jest.fn<Promise<User>, []>();

    const user = { id: '1' };

    const userService = {
      fetchUser: fetchUserMock,
    };

    const userController = getUserController(userService);

    beforeEach(() => {
      fetchUserMock.mockClear();
      fetchUserMock.mockResolvedValueOnce(user);
    });

    it('returns user from user service', async () => {
      const receivedUser = await userController.getUser(user.id);
      expect(receivedUser).toStrictEqual(user);
    });

    it('executes fetchUser method from userService', async () => {
      await userController.getUser(user.id);
      expect(userService.fetchUser).toHaveBeenCalledTimes(1);
      expect(userService.fetchUser).toHaveBeenCalledWith(user.id);
    });
  });
});
