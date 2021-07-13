import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  showAddTask:boolean = false;

  @Output() onAddTaskClick:EventEmitter<Task> = new EventEmitter();

  text:string = '';
  day:string = '';
  reminder:boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe( (value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text ){
      alert('Please enter Task details');
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    //emit event
    this.onAddTaskClick.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }

}
