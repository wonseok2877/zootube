import express from "express";

const dickRouter = express.Router();

dickRouter.get("/", (req, res) => res.send("user's dick!"));
dickRouter.get("/edit", (req, res) => res.send("user dick edit! "));
dickRouter.get("/password", (req, res) => res.send("user dick password !"));

export default dickRouter;
