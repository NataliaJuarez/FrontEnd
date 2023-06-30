import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/services/habilidades.service';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faCircleCheck = faCircleCheck;
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
