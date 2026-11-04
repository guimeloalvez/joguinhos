import { knex } from "../database/knex.js";
import type { CriarJogo, Jogo } from "../types/jogo.js";

class JogoRepository {
  async getAll(): Promise<Jogo[]> {
    const jogos = await knex("jogos").select("*").from("jogos");
    console.log(jogos);
    return jogos;
  }
  async create(jogoData: CriarJogo): Promise<Jogo> {
    const [novoJogo] = await knex("jogos").insert(jogoData).returning("*");
    return novoJogo;
  }
}

export const jogoRepository = new JogoRepository();
