import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,

    UserListComponent,
    UserComponent,
    AddUserComponent,
    ParentComponent,
    ChildComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule ,RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

