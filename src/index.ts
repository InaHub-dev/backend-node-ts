import MySQL from "./model/database/MySql";
import UserDAO from "./model/database/UserDAO";
import { User } from "./model/User";

const userDAO = new UserDAO();
const lang = new User({ name: "Lang", age: 19, password: "marmotaGammer222" });
// userDAO.createUser(lang);
async function test() {
  try {
    const aux = await userDAO.selectedAllUsers();
    console.log(aux);
  } catch {}
}
test();
// userDAO.selectedUserByLogin("Lang", "batata123")
// userDAO.updateUserPassword("Lang", "batata123", "newPass")

// console.log(lang.getPassword());
