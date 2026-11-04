import express from "express";
import { jogoRouter } from "./routes/jogo.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/jogos", jogoRouter);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
