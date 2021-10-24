import MySQL from "./database/mysql";
import UserDAO from "./database/UserDAO";
import { User } from "./model/User";

const userDAO = new UserDAO();
const lang = new User({ name: "Lang", age: 19, password: "marmotaGammer222" });
// userDAO.createUser(lang);
userDAO.selectedAllUsers();

// console.log(lang.getPassword());
