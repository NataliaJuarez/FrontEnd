export class persona {

    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    ciudad: String;
    pais: String;
    about: String;
    imagendeperfil: String;
    
    constructor(nombre: String, apellido: String, profesion: String, ciudad: String, pais: String, about: String, fotodeperfil: String) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
        this.ciudad=ciudad;
        this.pais=pais;
        this.about=about;
        this.imagendeperfil=fotodeperfil;
    }
    }
    