export class Ocorrencia {
    constructor(
        public id: string,
        public titulo: string,
        public descricao: string,
        public propriedade: string,
        public safra: string,
        public talhao: string,
        public coordenadas: string,
        public dataOcorrencia: string
    ) {}
}