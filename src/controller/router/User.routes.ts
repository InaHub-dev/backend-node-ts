import { Router, Request, Response } from "express";
import UserDAO from "../../model/database/UserDAO";
const userRouter = Router();

const userDAO = new UserDAO();

userRouter.get("/", async (req: Request, res: Response) => {
  res.json(await userDAO.selectAllUsers());
});

userRouter.get("/login", async (req: Request, res: Response) => {
  const info = req.body;
  try {
    const login = await userDAO.selectUserByLogin(info.email, info.password);
    console.log(login);
    res.send(login)
  } catch (err) {
    console.log(err);
  }
});


export default userRouter;
