import {bootstrap}    from "@angular/platform-browser-dynamic";
import {Component, OnInit}    from "@angular/core";

import {TodoList} from "./todo.service";

@Component({
    selector: 'app',
    providers: [TodoList],
    template: `
    
    <h1>Todo App</h1>
    
    <input [(ngModel)]="todo">
    <button (click)="addTodo()" [disabled]="!todo">Add a todo</button>
    
    <ul>
      <li *ngFor="let t of todos; let i = index">
        <p>
        {{t}}
         <button (click)="removeTodo(i)">Remove</button>
        </p>
       
        </li>
    </ul>
    
  `
})
class AppComponent implements OnInit {
    public todo: string;
    public todos: Array<string>;

    constructor(private _todoList: TodoList) {
    }

    ngOnInit() {
        this.todos = this._todoList.getTodos();
    }

    addTodo() {
        this._todoList.addTodo(this.todo);
        this.todo = '';
    }

    removeTodo(index: number) {
        this._todoList.removeTodo(index);
    }
}

bootstrap(AppComponent);
