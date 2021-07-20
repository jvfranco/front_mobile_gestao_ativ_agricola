import { Ocupacao } from "./ocupacao";

export class Pessoa {
    constructor(
        public id: string,
        public nome: string,
        public cpf: string,
        public email: string,
        public telefone: string,
        public ocupacao: Ocupacao
    ) {}
}