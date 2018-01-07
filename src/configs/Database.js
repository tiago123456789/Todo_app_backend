import mongoose from "mongoose";
import Constantes from "./Constantes";

mongoose.Promise = Promise; // Define lib de promise usada pelo mongoose.
mongoose.connect(Constantes.URL_DB);