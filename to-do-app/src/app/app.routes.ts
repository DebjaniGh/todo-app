import { Routes } from '@angular/router';
import { TodoCurrentComponent } from './todo-current/todo-current.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoInProgressComponent } from './todo-in-progress/todo-in-progress.component';

export const routes: Routes = [
  {
    path: '',
    component: TodoFormComponent,
  },
  {
    path: 'todo-current',
    component: TodoCurrentComponent,
  },
  {
    path: 'todo-inprogress',
    component: TodoInProgressComponent,
  },
  {
    path: 'todo-done',
    component: TodoDoneComponent,
  },
];
