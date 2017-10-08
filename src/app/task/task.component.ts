import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../services/task.service';

@Component({
  selector: '[app-task]', // this component is used as an attribute
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(id) {
    this.taskService.deleteTask(id);
  }

  toggleStatus(id) {
    this.taskService.toggleStatus(id);
  }
}
