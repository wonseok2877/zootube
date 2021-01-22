import express from "express";
import {
  userDetail,
  userEdit,
  userPassword,
  users,
} from "../controllers/userController";
import routes from "../routes";
import dickRouter from "./dickRouter";

// Router ! this is the only way to exclusively handle routers.
const userRouter = express.Router();

// "/" in here, is equal to the "/user" which defined in app.js
userRouter.get(routes.home, users);
userRouter.get(routes.userEdit, userEdit);
userRouter.get(routes.userPassword, userPassword);
userRouter.get(routes.userDetail, userDetail);

// we can make another router ! it's like almost infinite branches.

userRouter.use("/dick", dickRouter);

export default userRouter;
