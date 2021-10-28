import { Router, Request, Response } from "express";
import UserDAO from "../../model/database/UserDAO";
const userRouter = Router();

const userDAO = new UserDAO();

userRouter.get("/", async (req: Request, res: Response) => {
  res.json(await userDAO.selectedAllUsers());
});

// userRouter.post("/", async (req: Request, res: Response) => {
//   res.json(await userDAO.selectedAllUsers());
// });

export default userRouter;
