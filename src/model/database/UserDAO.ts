import { User } from "../User";
import MySQL from "./MySql";
import UserDB from "./interface/UserDB";

export default class UserDAO implements UserDB {
  public createUser(user: User) {
    const query = `INSERT INTO User (name, age, password, email)
        VALUES ("${user.name}", ${user.age}, "${user.getPassword()}", "${
      user.email
    }")`;
    // VALUES ("${user.name}", ${user.age}, "${user.getPassword()}", "${user.email}")`;

    return new Promise((resolve, reject) => {
      MySQL.query(query, (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  }

  public selectAllUsers() {
    const query = `SELECT * FROM User`;
    return new Promise((resolve, reject) => {
      MySQL.query(query, async (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }
        const allUsers = results.map((index: any) => {
          return new User({
            name: index.name,
            age: parseInt(index.age, 10),
            email: index.email,
            password: index.password,
          });
        });
        return resolve(allUsers);
      });
    });
  }

  public selectUserByLogin(email: string, password: string) {
    const query = `SELECT *
    FROM User
    WHERE email = "${email}" && password = "${password}";`;
    return new Promise((resolve, reject) => {
      MySQL.query(query, async (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }

        const user = results.map((index: any) => {
          return new User({
            name: index.name,
            age: parseInt(index.age, 10),
            email: index.email,
            password: index.password,
          });
        });
        return resolve(user);
      });
    });
  }

  //delete
}
