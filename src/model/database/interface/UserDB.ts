import { User } from "../../User";

export default interface UserDB {
  createUser(user: User): Promise<unknown>;
  selectAllUsers(): Array<User> | Promise<unknown>;
  // selectedUserByLogin(): User;
}
