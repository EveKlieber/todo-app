import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  newTodoName="";  // ngModel name - rückzugriff this.newTodoName


  constructor(public itemsS: ItemsService) { }

  ngOnInit(): void {
  }


  log(newItem:any){
    console.log("log", newItem.value)}  // works

   addItem(newItem:string) {
        newItem&&this.itemsS.itemsArray.push({description: newItem, done: false, prio: 0, edit: false, issued: new Date()});
        console.log(this.itemsS.itemsArray)
        this.itemsS.addLocalStorage();
        this.newTodoName="";
  }
}
