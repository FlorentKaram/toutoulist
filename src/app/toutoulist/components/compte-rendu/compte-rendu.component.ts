import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToutouliService } from '../../services/toutoulistservices.service';

@Component({
  selector: 'app-compte-rendu',
  templateUrl: './compte-rendu.component.html',
  styleUrls: ['./compte-rendu.component.scss']
})
export class CompteRenduComponent implements OnInit {
  task_list: string[] = [];
  task_list_Subscription!: Subscription;

  constructor(public toutouservices : ToutouliService) { }


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

}
