import { Component } from '@angular/core';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  persona = new persona("","");

  constructor(private perService: PersonaService) {

  }

  ngOnInit():void{
    //this.persona={nombre: "Paola", apellido: "Perez"};
    this.perService.verMiPerfil().subscribe(data => {
      this.persona=data;
      console.log(data);
    })
  }

}
