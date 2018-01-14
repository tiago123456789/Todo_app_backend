import express from "express";
import UserRouter from "./User";

export default (app) => {

    const userRouter = UserRouter(express);

    /**
     * @description Routas da aplicação.
     */
    app.use("/users", userRouter);
}