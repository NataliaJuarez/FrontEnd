import { Component, OnInit } from '@angular/core';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persona = new persona("","","","","","","","","","","");
  faPen = faPen;
  faPenToSquare = faPenToSquare;

  constructor(private perService: PersonaService) {

  }

  ngOnInit():void{
    this.perService.verMiPerfil().subscribe(data => {
      this.persona=data;
      console.log(data);
    })
  }

  onEdit(){
    console.log("EDIT!");
  }
}
