import { Router, Request, Response } from "express";
import UserDAO from "../../model/database/UserDAO";
import { User } from "../../model/User";
const userRouter = Router();

const userDAO = new UserDAO();

userRouter.get("/", async (req: Request, res: Response) => {
  res.json(await userDAO.selectAllUsers());
});

userRouter.get("/login", async (req: Request, res: Response) => {
  const info: any = req.query;
  console.log(req);
  try {
    const login = await userDAO.selectUserByLogin(info.email, info.password);
    console.log(login);
    res.send(login);
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      message: "This is an error!",
    });
  }
});

userRouter.post("/create", async (req: Request, res: Response) => {
  const info: any = req.body;
  console.log(info);
  const user = new User({
    name: info.name,
    age: parseInt(info.age, 10),
    email: info.email,
    password: info.password,
  });

  try {
    const login = await userDAO.createUser(user);
    console.log(login);
    res.send(login);
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      message: "This is an error!",
    });
  }
});

userRouter.post("/update", async (req: Request, res: Response) => {
  const info: any = req.query;
  try {
    const login = await userDAO.updateNameByEmail(info.email, info.password, info.newName);
    console.log(login);
    res.send(login);
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      message: "This is an error!",
    });
  }
});

userRouter.post("/test", async (req: Request, res: Response) => {
  const info: any = req.body;
  try {
    res.send(info);
  } catch (err) {
    console.log(err);
    return res.status(404).send({
      message: "This is an error!",
    });
  }
});

// userRouter.get("/delete", async (req: Request, res: Response) => {
//   const info: any = req.query;
//   try {
//     const login = await userDAO.selectUserByLogin(info.email, info.password);
//     console.log(login);
//     res.send(login);
//   } catch (err) {
//     console.log(err);
//     return res.status(404).send({
//       message: "This is an error!",
//     });
//   }
// });

export default userRouter;
