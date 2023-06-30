import { Component } from '@angular/core';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {
  faFloppyDisk = faFloppyDisk;
  faGithub = faGithub;
  faXmark = faXmark;
}
