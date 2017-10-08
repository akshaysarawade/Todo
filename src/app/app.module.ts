import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app.routing.module';
import { FooterComponent } from './footer/footer.component';
import { TaskComponent } from './task/task.component';
import { TaskService } from './services/task.service';
import { CategoryService } from './services/category.service';
import { TaskReducer } from './store/task.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTasksComponent,
    CreateTaskComponent,
    AboutComponent,
    FooterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({task: TaskReducer})
  ],
  providers: [ TaskService, CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
