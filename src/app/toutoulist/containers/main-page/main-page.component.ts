import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogModifieComponent } from '../../components/dialog-modifie/dialog-modifie.component';
import { ToutouliService } from '../../services/toutoulistservices.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  task_list: string[];
  constructor(public dialog : MatDialog, public toutouservices : ToutouliService) {
    this.task_list = toutouservices.task_list;
  }

  ngOnInit(): void {

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
