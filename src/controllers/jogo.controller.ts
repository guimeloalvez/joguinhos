import { type Request, type Response } from "express";
import { jogoService } from "../services/jogo.service.js";

class JogoController {
  async getAll(req: Request, res: Response) {
    try {
      const jogos = await jogoService.getAll();
      return res.json(jogos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
  async create(req: Request, res: Response) {
    try {
      const jogoData = req.body;
      const novoJogo = await jogoService.create(jogoData);
      return res.status(201).json(novoJogo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}

export const jogoController = new JogoController();
