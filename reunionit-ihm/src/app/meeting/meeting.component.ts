import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meeting } from '../shared/meeting.model';
import { MeetingsService } from '../shared/meetings.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  activeMeeting: Meeting;

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService) { }

  async ngOnInit() {
    const activeMeetingId = this.route.snapshot.paramMap.get('id');
    this.activeMeeting = await this.meetingService.getMeeting(activeMeetingId);
  }

}
