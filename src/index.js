import app from "./config/Server";
import Constantes from "./config/Constantes";

app.listen(Constantes.PORT, () => console.log("Servidor rodando!!"));
