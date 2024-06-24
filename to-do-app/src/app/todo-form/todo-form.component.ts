import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  constructor(private router: Router){}

  onAddTask(){
    this.router.navigate(['/todo-current'])
  }
}
