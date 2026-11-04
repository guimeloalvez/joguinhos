import { jogoRepository } from "../repositories/jogo.repository.js";
import type { CriarJogo } from "../types/jogo.js";

class JogosService {
  async getAll() {
    const jogos = await jogoRepository.getAll();
    return jogos;
  }
  async create(jogoData: CriarJogo): Promise<CriarJogo> {
    const jogo = await jogoRepository.create(jogoData);
    return jogo;
  }
}

export const jogoService = new JogosService();
