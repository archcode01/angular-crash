import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  constructor() { }

  faTimes = faTimes;

  @Input() task: Task ;
  @Output() deleteTaskClicked:EventEmitter<Task> = new EventEmitter();
  @Output() taskDblClicked:EventEmitter<Task> = new EventEmitter();

  ngOnInit(): void {
  }

  onClickDelete(task: Task){
    this.deleteTaskClicked.emit(task);
  }

  onDblClick(task:Task){
    this.taskDblClicked.emit(task);
  }

}
