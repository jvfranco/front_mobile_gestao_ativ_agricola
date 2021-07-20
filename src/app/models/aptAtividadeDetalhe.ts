import { AptAtividade } from "./aptAtividade";
import { Hibrido } from "./hibrido";
import { Insumo } from "./insumo";
import { Maquina } from "./maquina";
import { Pessoa } from "./pessoa";

export class AptAtividadeDetalhe {
    constructor(
        public id: string,
        public idApontamentoCabecalho: AptAtividade,
        public maquina: Maquina,
        public insumo: Insumo,
        public quantidadeInsumo: number,
        public hibrido: Hibrido,
        public quantidadeHibrido: number,
        public funcionario: Pessoa
    ) {}
}