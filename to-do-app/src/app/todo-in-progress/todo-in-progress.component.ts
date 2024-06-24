import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-in-progress',
  standalone: true,
  imports: [],
  templateUrl: './todo-in-progress.component.html',
  styleUrl: './todo-in-progress.component.css'
})
export class TodoInProgressComponent {
  constructor(private router: Router){}

  onViewCompletedTasks(){
    this.router.navigate(['/todo-done']);
  }
}
