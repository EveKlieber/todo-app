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
    const sorted: Item[] = this.itemsS.itemsArray.sort((a, b) => {
      if (a.done) {
        return -1;  // a vorne bei minus 1
      } else if (b.done)  {
        return 1;  // 
      } else  {
        return 0;
      }
    })
  }

  sortDate(){
    const sorted: Item[] = this.itemsS.itemsArray.sort((a, b) => b.issued.getTime() - a.issued.getTime())
      }
    // function gehen durch json stringlify and parse kaputt.
  }


