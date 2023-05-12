import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiHabilidadesService {

  private showAddHabilidad:boolean = false;
  private subject = new Subject<any>();
  
  constructor() { }

  toggleAddHabilidad():void{
    this.showAddHabilidad = !this.showAddHabilidad;
    this.subject.next(this.showAddHabilidad);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

  
}
