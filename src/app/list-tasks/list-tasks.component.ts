import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {
  private taskService: TaskService;
  taskState: Observable<{tasks: Array<any>}>;
  constructor(taskService: TaskService, private store: Store<{task: {tasks: [Array<any>]}}>) {
    this.taskService = taskService;
    // this.tasks = this.taskService.getTasks();
    this.taskState = this.store.select('task');
   }

  ngOnInit() {
  }

}
