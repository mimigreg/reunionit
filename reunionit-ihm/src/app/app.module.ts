import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { TasksComponent } from './tasks/tasks.component';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    TasksComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, RouterModule, AppRoutingModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
