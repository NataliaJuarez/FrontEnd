export class educacion {

    id?: number;
    establecimiento: String;
    titulo: String;
    anio: Date;
    logo: String;

    constructor(establecimiento: String, titulo: String, anio: Date, logo: String){ 
        this.establecimiento=establecimiento;
        this.titulo=titulo;
        this.anio=anio;
        this.logo=logo;
    }
}