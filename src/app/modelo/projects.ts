export class proyectos {

    id?: number;
    nombre: String;
    imagenproyecto: String;
    descripcion: String;

    
    constructor(nombre: String, imagenproyecto: String, descripcion: String) {
        this.nombre=nombre;
        this.imagenproyecto=imagenproyecto;
        this.descripcion=descripcion; 
    }
}
