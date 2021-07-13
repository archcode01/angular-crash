import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {
  showAddTask:boolean = false;
  subject:Subject<boolean> = new Subject();


  constructor() { }

  toggleAddTask(){
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<boolean>{
      return this.subject.asObservable();
  }
}
