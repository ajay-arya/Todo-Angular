import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo.interface.ts";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  myTodo: Todo[];
  newTodo: Todo;

  constructor() { }

  ngOnInit() {
    this.myTodo = [{
      detail: 'Step 1: Be born',
      isCompleted: false,
      isEditing: false
    }, {
      detail: 'Step 2: Learn to code',
      isCompleted: true,
      isEditing: false
    }, {
      detail: 'Step 3: Write Awesome code no matter how trivial it is',
      isCompleted: false,
      isEditing: false
    }, {
      detail: `Step 4: Enjoy and Die '-_-'`,
      isCompleted: false,
      isEditing: false
    }]
  }

}