import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AboutComponent } from './about/about.component';

const appRoutes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListTasksComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
