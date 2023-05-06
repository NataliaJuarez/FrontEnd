export class experiencia {

    id?: number;
    empresa: String;
    puesto: String;
    año: Date; //o number?

    constructor(empresa: String, puesto: String, año: Date) {
        this.empresa=empresa;
        this.puesto=puesto;
        this.año=año;
    }
}