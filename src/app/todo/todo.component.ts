import { Component, OnInit } from '@angular/core';
import {TotoService}from './toto.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TotoService]
})
export class TodoComponent implements OnInit {
  private todos;
  private activeTasks;
  constructor(private totoservice:TotoService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(){
    this.totoservice.get().then(todos=>
      {
        this.todos = todos;
        this.activeTasks=this.todos.filter(todo => todo.isDone).length;
      })
  }
}
