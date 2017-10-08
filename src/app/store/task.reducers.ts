import { Action } from '@ngrx/store';
import * as TaskActions from './task.actions';

export const ADD_TASK = 'ADD_TASK';
const initialState = {
  tasks: [
    {
      id: 1,
      description: 'Cleaning Wardrobe',
      categoryId: 999,
      categoryName: 'Home',
      dueDate: '2017-09-01',
      isDone: false
    }
  ]
};

export function TaskReducer(state = initialState, action: TaskActions.TaskActions ) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
    const taskToAdd = action.payload;
    taskToAdd.id = state.tasks.length + 1;
      return {
        ...state,
        tasks: [...state.tasks, taskToAdd]
      };
    case TaskActions.EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => task.id === +action.payload.id ? Object.assign({}, task, action.payload) : task)
      };
    case TaskActions.FETCH_TASK:
     console.log('fetched data: ', state.tasks.filter((task) => task.id === +action.payload.id));
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id === +action.payload.id)
      };
    case TaskActions.DELETE_TASK:
      const oldTasks = [...state.tasks];
      const taskIndex = oldTasks.findIndex((task) => task.id === +action.payload.id);
      oldTasks.splice(taskIndex, 1);
      return {
        ...state,
        tasks: oldTasks
      };
    case TaskActions.TOGGLE_STATUS:
    // const oldTasks = [...state.tasks];
    const updateTaskIndex = state.tasks.findIndex((task) => task.id === +action.payload.id);
    const taskToUpdate = state.tasks[updateTaskIndex];
    taskToUpdate.isDone = !taskToUpdate.isDone;
    state.tasks[updateTaskIndex] = taskToUpdate;
      return {
        ...state,
        tasks: state.tasks
      };
    default:
      return state;
  }
}
