import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao";

export class NegociacoesService {
  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dadosHoje) => {
          return new Negociacao(
            new Date(),
            dadosHoje.vezes,
            dadosHoje.montante
          );
        });
      });
  }
}
