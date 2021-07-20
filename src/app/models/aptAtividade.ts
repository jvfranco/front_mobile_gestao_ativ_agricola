export class AptAtividade {
    constructor(
        public id: string,
        public dataAtividade: string,
        public horaInicio: string,
        public horaTermino: string,
        public descricaoAtividade: string,
        public safra: string,
        public propriedade: string,
        public talhao: string
    ) {}
}