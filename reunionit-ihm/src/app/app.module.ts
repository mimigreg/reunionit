import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { MatButtonModule,
         MatCheckboxModule,
         MatToolbarModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule,
         MatDialogModule,
         MatAutocompleteModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { TasksComponent } from './tasks/tasks.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingTaskComponent } from './meeting/meeting.task.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    TasksComponent,
    MeetingComponent,
    MeetingTaskComponent
  ],
  entryComponents: [ MeetingTaskComponent ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, RouterModule, AppRoutingModule, HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule,
    MatListModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatDialogModule, MatAutocompleteModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'fr' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
