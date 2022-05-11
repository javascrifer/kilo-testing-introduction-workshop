interface User {
  id: string;
}

type QueryUserCallback = (user: User) => void;

describe('jest.fn', () => {
  describe('callback', () => {
    const queryUserCallback = jest.fn();

    const user = { id: '1' };

    const queryUser = (callback: QueryUserCallback) => {
      callback(user);
    };

    beforeEach(() => {
      queryUserCallback.mockClear();
    });

    it('executes query user callback with user from the database', () => {
      queryUser(queryUserCallback);
      expect(queryUserCallback).toHaveBeenCalledTimes(1);
      expect(queryUserCallback).toHaveBeenCalledWith(user);
    });
  });

  describe('mock implementations', () => {
    enum UserType {
      Admin,
      Guest,
    }

    const queryUserTypeMock = jest.fn();

    const fetchAndMap = async (queryUserType: () => Promise<UserType>) => {
      const userType = await queryUserType();
      return userType === UserType.Admin ? 1 : 2;
    };

    beforeEach(() => {
      queryUserTypeMock.mockReset();
    });

    it('return 1 when user type is admin', async () => {
      queryUserTypeMock.mockResolvedValueOnce(UserType.Admin);
      const response = await fetchAndMap(queryUserTypeMock);
      expect(response).toBe(1);
    });

    it('returns 2 when user type is guest', async () => {
      queryUserTypeMock.mockResolvedValueOnce(UserType.Guest);
      const response = await fetchAndMap(queryUserTypeMock);
      expect(response).toBe(2);
    });
  });
});
