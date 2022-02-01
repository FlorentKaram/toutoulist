import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaskComponent } from "./components/task/task.component";
import { MainPageComponent } from "./containers/main-page/main-page.component";
import { ToutoulistRoutingModule } from "./toutoulist.routing.module";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModifieComponent } from "./components/dialog-modifie/dialog-modifie.component";
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
    declarations : [
        MainPageComponent,
        TaskComponent,
        DialogModifieComponent,
    ],
    entryComponents : [DialogModifieComponent],
    providers : [
    ],
    imports : [
        ToutoulistRoutingModule,
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule

    ]
})

export class ToutoulistModule{

}