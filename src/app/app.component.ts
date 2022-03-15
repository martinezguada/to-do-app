import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos : Todo[] = [];
  nuevoTodo: string;

  saveTodo(){
    if(this.nuevoTodo){
    let todo = new Todo();
    todo.nombre = this.nuevoTodo;
    todo.completado = true;
    this.todos.push(todo);
    this.nuevoTodo = '' ;

  }
  else{
    alert('Por favor, agregar una tarea.');
  }
}



realizado(id:number){
  this.todos[id].completado = !this.todos[id].completado;
}

borrar(id:number){
  this.todos = this.todos.filter((v,i)=> i !==id);
}
}