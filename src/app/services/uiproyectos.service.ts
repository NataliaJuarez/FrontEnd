import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiproyectosService {
  
  private showAddProject:boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddEducacion():void{
    this.showAddProject = !this.showAddProject;
    this.subject.next(this.showAddProject);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
