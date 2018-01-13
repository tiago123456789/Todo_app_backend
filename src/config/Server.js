import express from "express";
import bodyParser from "body-parser";
import rotasApp from "./../routes/Index";
import "./Database";

const app = express();
/**
 * @description Define middleware que faz parse dos dados para json.
 */
app.use(bodyParser.json());

/**
 * @description Define rotas da aplicação.
 */
rotasApp(app);

export default app;

