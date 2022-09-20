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


  addLocalStorage(){
    localStorage.setItem('list', JSON.stringify(this.itemsArray))
  }
  
  readLocalStorage(){
    let stored = localStorage.getItem('list')
    if (stored)  // wichtig für TypeScript damit null verhindert wird.
    this.itemsArray = JSON.parse(stored)
    this.itemsArray.forEach((item) => {
      item.issued = new Date(item.issued)  // Date wird wieder obj
      console.log(typeof item.issued)
    })
  }
 
  // addItem(todo:string) {
  //   this.itemsArray.push(todo)
  // }

  
}
