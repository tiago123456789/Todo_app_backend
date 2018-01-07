import mongoose from "mongoose";
import REGEX from "../lib/Validator";
import Senha from "../services/Senha";
import taskSchema from "./Task";

const senhaService = new Senha();
const userSchema = new mongoose.Schema({
   nome: { type: String, required: true, min: 3 },
   email: { type: String , required: true, validate: [REGEX.isEmailValid, "Email inválido"] },
   tasks: [taskSchema],
   senha: { type: String , required: true }
});

export default mongoose.model("user", userSchema);