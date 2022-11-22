import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {AboutUsComponent} from "./modules/about-us/about-us.component";
import {JokesListComponent} from "./modules/jokes-list/jokes-list.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "jokeslist", component: JokesListComponent},
  {path: "aboutus", component: AboutUsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
