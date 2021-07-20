export class Propriedade {
    constructor(
        public id: string,
        public nome: string,
        public idProprietario: string,
        public area: number,
        public idUnidadeDeMedida: string,
        public coordenadas: string
    ) {}
}