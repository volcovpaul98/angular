import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { FormExerciceComponent } from './form-exercice/form-exercice.component';
import { Form2Component } from './form2/form2.component';
import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    AddUserComponent,
    ParentComponent,
    ChildComponent,
    TestComponent,
    FormExerciceComponent,
    Form2Component
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule ,RouterModule ,   ReactiveFormsModule
  ],
  providers: [CarService],
   
  bootstrap: [AppComponent] ,
})
export class AppModule { }

