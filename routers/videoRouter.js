import express from "express";
import {
  videoDelete,
  videoDetail,
  videoEdit,
  videoHome,
  videoUpload,
} from "../controllers/videoController";
import routes from "../routes";
import dickRouter from "./dickRouter";

// Router !
export const videoRouter = express.Router();
// "/" in here, is equal to the "/user" which defined in app.js
videoRouter.get(routes.home, videoHome);
videoRouter.get(routes.videoUpload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);
videoRouter.get(routes.videoDelete, videoDelete);

videoRouter.use("/dick", dickRouter);

export default videoRouter;
