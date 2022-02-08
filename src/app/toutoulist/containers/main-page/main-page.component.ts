import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ToutouliService } from '../../services/toutoulistservices.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  task_list: string[] = [];
  task_list_Subscription!: Subscription;

  constructor(public dialog : MatDialog, public toutouservices : ToutouliService) {
  }


  ngOnInit(): void {
    this.task_list_Subscription = this.toutouservices.task_list$.subscribe((tasks : string[]) => {
      this.task_list = tasks;
    })
  }

  ngOnDestroy(): void {
    if(this.task_list_Subscription){
      this.task_list_Subscription.unsubscribe();
    }
  }

  openDialog(value : string){
    this.toutouservices.openDialog(value);
  }

  add_task(value: string) {
    this.toutouservices.add_task(value);
  }
  remove_task(value: string) {
    this.toutouservices.remove_task(value);
  }
}
