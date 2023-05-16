import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  faPen = faPen;
  faTrash = faTrash;
  skillsList: any;
  
  constructor (private habiService: HabilidadesService) {}

  ngOnInit(): void {
    this.habiService.verHabilidades().subscribe(data => {
      this.skillsList=data;
      console.log(this.skillsList[0]);
    })
  }

  onDelete(){
    console.log("DELETE!");
  }

  onEdit(){
    console.log("EDIT!");
  }
}
