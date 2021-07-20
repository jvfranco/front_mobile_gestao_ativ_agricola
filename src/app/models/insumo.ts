export class Insumo {
    constructor(
        public id: string,
        public identificacao: string,
        public ingredientesAtivos: string,
        public aplicacao: string,
        public formulacao: string,
        public classeAgronomica: string,
        public modoDeAcao: string,
        public quantidade: number,
        public idUnidadeDeMedida: string,
        public idMarca: string
    ) {}
}