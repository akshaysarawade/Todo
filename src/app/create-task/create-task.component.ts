import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CategoryService } from '../services/category.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  taskForm: FormGroup;
  categories = [];
  isEditMode: Boolean;

  constructor(private categoryService: CategoryService, private taskService: TaskService, private route: ActivatedRoute) {
    this.categoryService = categoryService;
    this.taskService = taskService;
    this.categories = this.categoryService.getCategories();
    this.isEditMode = false;
   }

  ngOnInit() {
    const taskId = this.route.snapshot.queryParams.id;
    if (taskId) {
      console.log(' TASK---: ', this.taskService.getTask(taskId));
      const selectedTask = this.taskService.getTask(taskId)[0];
      console.log('sel task: ', selectedTask);
      this.isEditMode = true;
      this.taskForm = new FormGroup({
        'category': new FormControl(selectedTask.categoryId, Validators.required),
        'description': new FormControl(selectedTask.description, Validators.required),
        'dueDate': new FormControl(selectedTask.dueDate)
      });
    } else {
      this.taskForm = new FormGroup({
        'category': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'dueDate': new FormControl(null)
      });
    }
  }

  addTask() {
    const formValues = this.taskForm.value;
    this.taskService.addTask(formValues, this.isEditMode, this.route.snapshot.queryParams.id);
    this.taskForm.reset();
  }
}
