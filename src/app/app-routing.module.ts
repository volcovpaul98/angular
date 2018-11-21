import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component';
import { ParentComponent } from './parent-child/parent/parent.component';


const routes : Routes = [
  {path: 'user-list', component:UserListComponent , pathMatch: 'full'} ,
  {path: 'ball-play', component:ParentComponent}
  
  



];

@NgModule({
  imports: [
    CommonModule ,RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }


