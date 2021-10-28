import MySQL from "./model/database/MySql";
import UserDAO from "./model/database/UserDAO";
import { User } from "./model/User";

const userDAO = new UserDAO();
const lang = new User({
  name: "Lang",
  age: 19,
  password: "marmotaGammer222",
  email: "batma@qqq",
});
// userDAO.createUser(lang);

// test();
// userDAO.selectedUserByLogin("Lang", "batata123")
// userDAO.updateUserPassword("Lang", "batata123", "newPass")

// console.log(lang.getPassword());

async function test() {
  try {
    // const aux = await userDAO.createUser(lang);
    const aux = await userDAO.selectAllUsers();
    console.log(aux);
  } catch (err) {
    console.log(err);
  }
}

test()