import {Injectable} from '@angular/core';

@Injectable()
export class TodoList {
    public todos: Array<string> = [];

    /**
     * Gets all the todos.
     */
    public getTodos(): Array<string> {
        return this.todos;
    }

    /**
     * Add a todo to the list.
     */
    public addTodo(todo: string): void {
        this.todos.push(todo);
    }

    /**
     * Removes the todo.
     */
    public removeTodo(index: number): Array<string> {
        return this.todos.splice(index, 1);
    }
}
