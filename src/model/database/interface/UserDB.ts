import { User } from "../../User";

export default interface UserDB {
  createUser(): User;
  selectAllUsers(): Array<User>;
  selectedUserByLogin(): User;
}
