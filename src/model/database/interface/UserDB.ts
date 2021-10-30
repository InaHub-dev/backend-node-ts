import { User } from "../../User";

export default interface UserDB {
  createUser(user: User): Promise<unknown>;
  selectAllUsers(): Array<User> | Promise<unknown>;
  selectUserByLogin(email: string, password: string): User | Promise<unknown>;
  updateNameByEmail(
    email: string,
    password: string,
    newName: string
  ): User | Promise<unknown>;
  deleteUser(
    email: string,
    password: string,
    name: string
  ): User | Promise<unknown>;
  // selectedUserByLogin(): User;
}
