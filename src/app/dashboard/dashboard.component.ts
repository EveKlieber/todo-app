import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Item } from '../item';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public itemsS: ItemsService) { }

  ngOnInit(): void {
  }


  sortDone(){
    // const sorted: Item[] = this.itemsS.itemsArray.sort((a, b) => {
    //   if (a.done !== b.done) {
    //     return -1;
    //   }
    // })
  }

  sortDate() {
    
  }

}
