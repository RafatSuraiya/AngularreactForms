import { Injectable } from '@angular/core';
const TODOS=[
  {title:'Install Angular CLI',isDone:true},
  {title:'Style app',isDone:true},
  {title:'Finish Service functionality',isDone:false},
  {title:'Setup API',isDone:false}
];
@Injectable({
  providedIn: 'root'
})
export class TotoService {
  constructor() { }
  get() {
    return new Promise(resolve => resolve(TODOS));
  }
}
