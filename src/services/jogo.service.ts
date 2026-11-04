import { jogoRepository } from "../repositories/jogo.repository.js";

class JogosService {
  async getAll() {
    const jogos = await jogoRepository.getAll();
    return jogos;
  }
}

export const jogoService = new JogosService();
