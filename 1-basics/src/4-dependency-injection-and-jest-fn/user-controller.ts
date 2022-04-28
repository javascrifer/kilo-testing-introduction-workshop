import { User } from './types';
import { UserService } from './user-service';

interface UserController {
  getUser: (id: string) => Promise<User>;
}

export const getUserController = (
  userService: UserService
): UserController => ({
  getUser: (id: string) => userService.fetchUser(id),
});
