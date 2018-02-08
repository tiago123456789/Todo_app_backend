import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import rotasApp from "./../routes/Index";
import "./Database";

const app = express();

/**
 * @description Define middleware que faz parse dos dados para json.
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @description Habilita cors na aplicação.
 */
app.use(cors());

/**
 * @description Define rotas da aplicação.
 */
rotasApp(app);

export default app;

