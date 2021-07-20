export class AptAtividadeDetalheForm {
    constructor(
        public id: string,
        public idApontamentoCabecalho: string,
        public maquina: string,
        public insumo: string,
        public quantidadeInsumo: number,
        public hibrido: string,
        public quantidadeHibrido: number,
        public funcionario: string
    ) {}
}