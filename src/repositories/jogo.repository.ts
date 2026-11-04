import { knex } from "../database/knex.js";
import type { Jogo } from "../types/jogo.js";

class JogoRepository {
  async getAll(): Promise<Jogo[]> {
    const jogos = await knex("jogos").select("*").from("jogos");
    console.log(jogos);
    return jogos;
  }
}

export const jogoRepository = new JogoRepository();
