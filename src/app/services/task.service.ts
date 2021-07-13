import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';


const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task:Task):Observable<Task>{
    const apiTaskUri = `${this.apiUrl}/${task.id}`;
    console.log(apiTaskUri);
    return this.http.delete<Task>(apiTaskUri);
  }

  updateTask(task: Task): Observable<Task>{
    const apiTaskUri = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(apiTaskUri, task, options)
  }

  addNewTask(newTask:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,newTask,options );
  }
}
