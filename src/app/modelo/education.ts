export class educacion {

    id?: number;
    establecimiento: String;
    titulo: String;
    anio: Date;

    constructor(establecimiento: String, titulo: String, anio: Date){ 
        this.establecimiento=establecimiento;
        this.titulo=titulo;
        this.anio=anio;
    }
}