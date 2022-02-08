import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DialogModifieComponent } from '../components/dialog-modifie/dialog-modifie.component';

@Injectable({
  providedIn: 'root'
})
export class ToutouliService {
  public task_list$ : BehaviorSubject<string[]>;
  //task_list$ : Observable<string[]> = this._task_list.asObservable;
  task_list: string[] = [];
  constructor(public dialog : MatDialog) { 
    this.task_list$ = new BehaviorSubject<string[]>(this.task_list);
  }
  add_task(value: string){
    if (value == "") {
      return
    }
    for (let index = 0; index < this.task_list.length; index++) {
      if(value == this.task_list[index]){
        return
      }
    }
    this.task_list.push(value);
    this.task_list$.next(this.task_list);
  }
  remove_task(value: string) {
    this.task_list.forEach((element, index) => {
      if (element == value) {
        this.task_list.splice(index, 1);
        this.task_list$.next(this.task_list);
      }
    });
  }
  openDialog(value : string){
    let dialogRef = this.dialog.open(DialogModifieComponent);
    dialogRef.afterClosed().subscribe((result: string) => {
      for (let index = 0; index < this.task_list.length; index++) {
        if(value == this.task_list[index]){
            this.task_list[index] = result;
            this.task_list$.next(this.task_list);
        }
      }
    })
  }
}
