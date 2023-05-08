import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddEducacion:boolean = false;
  private subject = new Subject<any>();
  
  constructor() { }

  toggleAddEducacion():void{
    this.showAddEducacion = !this.showAddEducacion;
    this.subject.next(this.showAddEducacion);
  }

  onToggle():Observable<any>{
    return this.subject.asObservable();
  }

}
