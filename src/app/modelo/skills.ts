export class habilidades {

    id?: number;
    nombre: String;
    nivel: String; //o number dependiendo de si pongo porcentaje o "principiante"

    constructor(nombre: String, nivel: String) {
        this.nombre=nombre;
        this.nivel=nivel;
    }
}