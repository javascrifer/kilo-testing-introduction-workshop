import { User, UserServiceInterface } from './types';

interface UserController {
  getUser: (id: string) => Promise<User>;
}

export const getUserController = (
  userService: UserServiceInterface
): UserController => ({
  getUser: (id: string) => userService.fetchUser(id),
});
