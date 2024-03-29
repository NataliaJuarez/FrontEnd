import { Component } from '@angular/core';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  faPenToSquare = faPenToSquare;
  persona = new persona("","","","","","","","","","","");

  constructor(private perService: PersonaService) {

  }

  ngOnInit():void{
    this.perService.verMiPerfil().subscribe(data => {
      this.persona=data;
      console.log(data);
    })
  }

  onDelete(){
    console.log("DELETE!");
  }

  onEdit(){
    console.log("EDIT!");
  }
}
