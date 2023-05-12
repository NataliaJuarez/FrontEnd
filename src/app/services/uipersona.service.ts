import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiPersonaService {

  private showEditPersona:boolean = false;
  private subject = new Subject<any>();
  
  constructor() { }

  toggleEditPersona():void{
    this.showEditPersona = !this.showEditPersona;
    this.subject.next(this.showEditPersona);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }
}
