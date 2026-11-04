import { Router } from "express";
import { jogoController } from "../controllers/jogo.controller.js";

export const jogoRouter = Router();

jogoRouter.get("/", jogoController.getAll);
jogoRouter.post("/", jogoController.create);
