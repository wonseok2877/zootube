import "core-js";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

// middlewares
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

/* next() !
next()를 쓰지 않은 middleware는 중간에서 connection 끊을 수 있으니 주의. 
const middleware = (req, res, next) => {
  res.send("not happening");
};
const betweenHome = (req, res, next) => {
  console.log("middleware");
  next();
};*/

// express.use : using the whole things at the router !
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// exporting whole app.js file !
export default app;
