import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {


  countPrio = 0;
  constructor(public itemsS: ItemsService) { }



  ngOnInit(): void {
  }


  changeStatus(item: Item) {
    this.itemsS.itemsArray.forEach((task: Item) => {    
      if (task.description === item.description)
      task.done = !task.done;
      })
  }

  deleteItem(item: Item) {
    const result = this.itemsS.itemsArray.filter((task: Item) => {    
      if (task.description !== item.description) 
      
        return task
      else {
        return
      }
    
      })
      this.itemsS.itemsArray = result;
  }

  changePrio(countPrio: any){
    // this.itemsS.itemsArray.forEach((task: Item) => {    
    //   if (
      // }
      // )
  }
}
