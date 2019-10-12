import { Component, OnInit } from '@angular/core';
import { Todo } from "./todo.interface.ts";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  myTodo: Todo[];
  newTodo: Todo = {
    detail: '',
    isCompleted: false,
    isEditing: false
  };

  constructor() { }

  ngOnInit() {
    this.myTodo = [{
      detail: 'Add new task in textarea',
      isCompleted: false,
      isEditing: false
    }, {
      detail: 'Double click on Task to start editing',
      isCompleted: true,
      isEditing: false
    }, {
      detail: 'Checkbox shows task status [Pending | Complete]',
      isCompleted: false,
      isEditing: false
    }, {
      detail: `Step 4: Enjoy and Die '-_-'`,
      isCompleted: false,
      isEditing: false
    }]
  }

  addTodo(): void {
    if (this.newTodo.detail.length !== 0) {
      this.myTodo.push(this.newTodo);
      this.newTodo = {
        detail: '',
        isCompleted: false,
        isEditing: false
      };
    }
  }

  deleteCompleted() {
    this.myTodo.filter(todo => !todo.isCompleted);
  }

  checkAll() {
    this.myTodo.forEach(todo => {
      todo.isCompleted = true;
    });
  }

  function() {
    console.log('Write code');
  }

  startEditing(i) {
    this.myTodo[i].isEditing = true;
  }

  stopEditing(i) {
    this.myTodo[i].isEditing = false;
  }

  deleteTodo(i) {
    this.myTodo.splice(i, 1);
  }

}