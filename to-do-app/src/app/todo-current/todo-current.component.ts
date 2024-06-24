import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-current',
  standalone: true,
  imports: [],
  templateUrl: './todo-current.component.html',
  styleUrl: './todo-current.component.css'
})
export class TodoCurrentComponent {
  constructor(private router: Router){}

  onViewInProgressTasks() {
    this.router.navigate(['/todo-inprogress'])
  }
}
