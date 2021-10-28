import { User } from "../User";
import MySQL from "./MySql";
import UserDB from "./interface/UserDB";

export default class UserDAO implements UserDB {
  public createUser(user: User) {
    const query = `INSERT INTO User ("name", "age", "password", "email")
        VALUES ("${user.name}", ${user.age}, "${user.getPassword()}", ${user.email})`;

    return new Promise((resolve, reject) => {
      MySQL.query(query, (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  }

  // public selectedAllUsers() {
  //   const query = `SELECT * FROM User`;
  //   return new Promise((resolve, reject) => {
  //     MySQL.query(query, async (err: Error, results: Object[]) => {
  //       if (err) {
  //         return reject(err);
  //       }
  //       return resolve(results);
  //     });
  //   });
  // }

  // public selectedUserByLogin(name: string, password: string) {
  //   let res: Object[] | boolean = false;
  //   const query = `SELECT *
  //   FROM User
  //   WHERE name = "${name}" && password = "${password}";`;
  //   MySQL.query(query, (err: Error, results: Object[]) => {
  //     if (err) {
  //       console.log(err);
  //       return;
  //     }
  //     console.log(results);
  //     res = results;
  //   });

  //   return res;
  // }

  //delete
}
