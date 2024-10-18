import { Comparavel } from "../interfaces/comparavel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Comparavel<Negociacoes> {
  private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public heIgual(objeto: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(objeto);
  }
}
