import { User } from './types';

export class UserServiceBad {
  async fetchUser() {
    const user = await fetch('/user').then((res) => res.json());
    return user as User;
  }
}
