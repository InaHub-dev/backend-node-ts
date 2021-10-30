import { User } from "../User";
import MySQL from "./MySql";
import UserDB from "./interface/UserDB";

export default class UserDAO implements UserDB {
  public createUser(user: User): Promise<unknown> {
    const query = `INSERT INTO User (name, age, password, email) VALUES ("${
      user.name
    }", ${user.age}, "${user.getPassword()}", "${user.email}")`;
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

  public selectAllUsers(): Array<User> | Promise<unknown> {
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

  public selectUserByLogin(
    email: string,
    password: string
  ): User | Promise<unknown> {
    const query = `SELECT * FROM User WHERE email = "${email}" && password = "${password}";`;
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

  public updateNameByEmail(
    email: string,
    password: string,
    newName: string
  ): User | Promise<unknown> {
    const query = `UPDATE User SET name = "${newName}" WHERE User.email = "${email}" and User.password = "${password}";`;
    return new Promise((resolve, reject) => {
      MySQL.query(query, async (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }
        console.log(results);
        return resolve(1);
      });
    });
  }

  public deleteUser(
    email: string,
    password: string,
    name: string
  ): User | Promise<unknown> {
    const query = `DELETE FROM User WHERE email = "${email}" and password = "${password}" and name = "${name}";`;
    return new Promise((resolve, reject) => {
      MySQL.query(query, async (err: Error, results: Object[]) => {
        if (err) {
          return reject(err);
        }
        console.log(results);
        return resolve(1);
      });
    });
  }
}
