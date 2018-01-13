import app from "./src/config/Server";
import Constantes from "./src/config/Constantes";

app.listen(Constantes.PORT, () => console.log("Servidor rodando!!"));
