import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  newTodoName="";


  constructor(public itemsS: ItemsService) { }

  ngOnInit(): void {
  }


  log(newItem:any){
    console.log("log", newItem.value)}  // works

   addItem(newItem:string) {
        console.log(newItem)
        this.itemsS.itemsArray.push({description: newItem, done: false, prio: 0});
        console.log(this.itemsS.itemsArray)
        this.newTodoName="";
  }
}
