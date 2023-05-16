export class educacion {

    id?: number;
    establecimiento: String;
    titulo: String;
    anio1: Date;
    anio2: Date;
    logo: String;

    constructor(establecimiento: String, titulo: String, anio1: Date, anio2: Date, logo: String){ 
        this.establecimiento=establecimiento;
        this.titulo=titulo;
        this.anio1=anio1;
        this.anio2=anio2;
        this.logo=logo;
    }
}