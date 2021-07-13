import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] ;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe( (tsks) => {
      this.tasks = tsks;
    })
  }

  deleteTask(task:Task) {
    this.taskService.deleteTask(task).subscribe( () => {
      this.tasks = this.tasks.filter( tsk => tsk.id !== task.id);
    });
  }

  updateReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

  addTask(task:Task){
    console.log("recieved task to add - "+ task);
    this.taskService.addNewTask(task).subscribe((tsk) => {
      console.log("task added to db - "+tsk);
      this.tasks.push(task);
    })
  }

}
