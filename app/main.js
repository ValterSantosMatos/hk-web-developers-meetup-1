"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var todo_service_1 = require("./todo.service");
var AppComponent = (function () {
    function AppComponent(_todoList) {
        this._todoList = _todoList;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.todos = this._todoList.getTodos();
    };
    AppComponent.prototype.addTodo = function () {
        this._todoList.addTodo(this.todo);
        this.todo = '';
    };
    AppComponent.prototype.removeTodo = function (index) {
        this._todoList.removeTodo(index);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            providers: [todo_service_1.TodoList],
            template: "\n    \n    <h1>Todo App</h1>\n    \n    <input [(ngModel)]=\"todo\">\n    <button (click)=\"addTodo()\" [disabled]=\"!todo\">Add a todo</button>\n    \n    <ul>\n      <li *ngFor=\"let t of todos; let i = index\">\n        <p>\n        {{t}}\n         <button (click)=\"removeTodo(i)\">Remove</button>\n        </p>\n       \n        </li>\n    </ul>\n    \n  "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoList])
    ], AppComponent);
    return AppComponent;
}());
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=main.js.map