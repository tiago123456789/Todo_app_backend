import app from "./src/configs/Server";
import Constantes from "./src/configs/Constantes";

app.listen(Constantes.PORT, () => console.log("Servidor rodando!!"));
