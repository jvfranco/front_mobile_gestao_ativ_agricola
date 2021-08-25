import { Propriedade } from "./propriedade";
import { Safra } from "./safra";
import { Talhao } from "./talhao";

export class AptAtividadeDTO {
    constructor(
        public id: string,
        public dataAtividade: string,
        public horaInicio: string,
        public horaTermino: string,
        public descricaoAtividade: string,
        public safra: Safra,
        public propriedade: Propriedade,
        public talhao: Talhao
    ) {}
}