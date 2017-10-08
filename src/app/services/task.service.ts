import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoryService } from './category.service';
import * as TaskActions from '../store/task.actions';

@Injectable()
export class TaskService {

  constructor(private categoryService: CategoryService, private store: Store<{task: {tasks: [Array<any>]}}>) {
    this.categoryService = categoryService;
  }

  // private tasks = [
  //   { id: 1, description: 'Cleaning Wardrobe', categoryId: 999, categoryName: 'Home', dueDate: '2017-09-01', isDone: false }
  // ];

  // getTasks() {console.log('asdada');
  //   const test = this.store.dispatch(new TaskActions.FetchTasks());
  //   console.log('data: ', test);
  // return this.tasks;
  // }

  addTask(task, isEditMode, taskId) {
    const categoryId = task.category;
    let categoryName = '';
    const categoryObj = this.categoryService.getCategoryById(categoryId);
    if (typeof categoryObj === 'object' && categoryObj.length === 1) {
      categoryName = categoryObj[0].name;
    }

    const newTask = {
      id: isEditMode ? taskId : '',
      description: task.description,
      categoryId: categoryId,
      categoryName: categoryName,
      dueDate: task.dueDate,
      isDone: false
    };
    isEditMode ? this.store.dispatch(new TaskActions.EditTask(newTask)) : this.store.dispatch(new TaskActions.AddTask(newTask));
  }

  getTask(id) {
    const task = this.store.dispatch(new TaskActions.FetchTask({id: id}));
    console.log('sel task11: ', task);
    // return this.tasks.filter((task) => task.id === +id);
  }

  deleteTask(id) {
    this.store.dispatch(new TaskActions.DeleteTask({id: id}));
  }

  toggleStatus(id) {
    this.store.dispatch(new TaskActions.ToggleStatus({id: id}));
  }
}
