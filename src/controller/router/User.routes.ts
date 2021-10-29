import { Router, Request, Response } from "express";
import UserDAO from "../../model/database/UserDAO";
const userRouter = Router();

const userDAO = new UserDAO();

userRouter.get("/", async (req: Request, res: Response) => {
  res.json(await userDAO.selectAllUsers());
});

userRouter.get("/login", async (req: Request, res: Response) => {
  const info: any = req.query;
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

userRouter.get("/marmota", async (req: Request, res: Response) => {
  const info: any = req.query;
  console.log(info.email, info.password);
  res.json(info);
});

export default userRouter;
