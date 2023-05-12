export class experiencia {

    id?: number;
    empresa: String;
    puesto: String;
    anio1: Date;
    anio2: Date;
    descripcion: String;

    constructor(empresa: String, puesto: String, anio1: Date, anio2: Date, descripcion: String) {
        this.empresa=empresa;
        this.puesto=puesto;
        this.anio1=anio1;
        this.anio2=anio2,
        this.descripcion=descripcion;
    }
}