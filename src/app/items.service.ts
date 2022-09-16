import { Injectable } from '@angular/core';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsArray:Item[] = [ 
      { description: 'eat', done: true, prio: 6, edit: false, issued: new Date() },
      { description: 'sleep', done: false, prio: 2, edit: false, issued: new Date() },
      { description: 'play', done: true, prio: 4, edit: false, issued: new Date()},
      { description: 'laugh', done: false, prio: 1, edit: false, issued: new Date() },
  ];

  
  constructor() { }

 
  // addItem(todo:string) {
  //   this.itemsArray.push(todo)
  // }

  
}
