import { Component } from '@angular/core';
import { persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  persona = new persona("", "", "", "", "", "", "", "", "", "", "");

  constructor(private perService: PersonaService) {

  }

  ngOnInit(): void {
    this.perService.verMiPerfil().subscribe(data => {
      this.persona = data;
      console.log(data);
    })
  }

}
