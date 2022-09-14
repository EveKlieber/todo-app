import { Injectable } from '@angular/core';
import { Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsArray:Item[] = [ 
      { description: 'eat', done: true, prio: 6 },
      { description: 'sleep', done: false, prio: 2 },
      { description: 'play', done: true, prio: 4 },
      { description: 'laugh', done: false, prio: 1 },
  ];

  
  constructor() { }

 
  // addItem(todo:string) {
  //   this.itemsArray.push(todo)
  // }

  
}
