import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CompteRenduComponent } from "./containers/compte-rendu/compte-rendu.component";
import { MainPageComponent } from "./containers/main-page/main-page.component";

const routes : Routes = [
    {
        path : "",
        component : MainPageComponent
    },
    {
        path : "compte-rendu",
        component : CompteRenduComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ToutoulistRoutingModule {

}