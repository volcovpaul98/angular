import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent} from './user-list/user-list.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { FormExerciceComponent } from './form-exercice/form-exercice.component';
import { Form2Component } from './form2/form2.component';
import { ObservableComponent } from './observable/observable.component';
import { AddCarComponent } from './add-car/add-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';

const routes : Routes = [
  {path: 'user-list', component:UserListComponent , pathMatch: 'full'} ,
  {path: 'ball-play', component:ParentComponent},
  {path: 'form-exercice', component:FormExerciceComponent},
  {path: 'form2', component:Form2Component},
  {path: 'observable', component:ObservableComponent},
  {path: 'add-car', component:AddCarComponent},
  {path: 'edit-car', component:EditCarComponent}
  
  



];

@NgModule({
  imports: [
    CommonModule ,RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }


