export class educacion {

    id?: number;
    establecimiento: String;
    titulo: String;
    año: Date;

    constructor(establecimiento: String, titulo: String, año: Date){ 
        this.establecimiento=establecimiento;
        this.titulo=titulo;
        this.año=año;
    }
}