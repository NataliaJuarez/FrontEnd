export class persona {

    id?: number;
    nombre: String;
    apellido: String;
    profesion: String;
    fotoperfil: String;
    imagenbanner: String;
    about: String;
    ciudad: String;
    provincia: String;
    pais: String;
    mail: String;
    redsocial: String;
    
    constructor(nombre: String, apellido: String, profesion: String, fotoperfil: String, imagenbanner: String, about: String, ciudad: String, provincia: String, pais: String, mail: String, redsocial: String) {
        this.nombre=nombre;
        this.apellido=apellido;
        this.profesion=profesion;
        this.fotoperfil=fotoperfil;
        this.imagenbanner=imagenbanner;
        this.about=about;
        this.ciudad=ciudad;
        this.provincia=provincia;
        this.pais=pais;
        this.mail=mail;
        this.redsocial=redsocial;
        
    }
    }
    