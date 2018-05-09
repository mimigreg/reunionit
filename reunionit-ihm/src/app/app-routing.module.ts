import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeetingComponent } from './meeting/meeting.component';
import { PlanningComponent } from './planning/planning.component';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
  { path: 'meeting', component: MeetingComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'tasks', component: TasksComponent },
  { path: '',   redirectTo: '/planning', pathMatch: 'full' },
  { path: '**', component: PlanningComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
