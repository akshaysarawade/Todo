import { Action } from '@ngrx/store';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASK = 'FETCH_TASK';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload) {}
}

export class EditTask implements Action {
  readonly type = EDIT_TASK;
  constructor(public payload) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public payload) {}
}

export class FetchTasks implements Action {
  readonly type = FETCH_TASKS;
  constructor() {}
}

export class FetchTask implements Action {
  readonly type = FETCH_TASK;
  constructor(public payload) {}
}

export class ToggleStatus implements Action {
  readonly type = TOGGLE_STATUS;
  constructor(public payload) {}
}

export type TaskActions = AddTask | EditTask | DeleteTask | FetchTasks | FetchTask | ToggleStatus;
