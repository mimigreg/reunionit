import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meeting } from '../shared/meeting.model';
import { MeetingsService } from '../shared/meetings.service';
import { CalendarToolkitService } from '../shared/calendar-toolkit.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  displayMode: 'week'; // day, week, month , defaulting week
  meetings: Array<Meeting>;
  displayedDays: Array<Date>;
  displayedHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  constructor(private meetingService: MeetingsService, private calendarToolkit: CalendarToolkitService,
    private router: Router) {
    this.displayedDays = calendarToolkit.getWeeksDays(new Date());
  }

  async ngOnInit() {
    this.meetings = await this.meetingService.getMeetings(undefined, undefined, 'me');
  }

  seeMeeting(meeting: Meeting) {
    this.router.navigate(['/meeting', {id: meeting.id}]);
  }

  // Hooks to handle Date, unfortunately you loose date type when you get it from angular HttpClient
  dayOfWeek(date: Date): number {
    const value = new Date(date).getUTCDay() - 1;
    return (value < 0) ? 6 : value;
  }
  hourOfDay(date: Date): number {
    return new Date(date).getHours() + (new Date(date).getMinutes() / 60);
  }
}
