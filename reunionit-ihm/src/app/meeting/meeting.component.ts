import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Meeting } from '../shared/meeting.model';
import { MeetingsService } from '../shared/meetings.service';
import { UsersService } from '../shared/users.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Task } from '../shared/task.model';
import { MeetingTaskComponent } from './meeting.task.component';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  options: FormGroup;
  activeMeeting: Meeting;
  tasksList: Array<Task>;

  constructor(private route: ActivatedRoute, private meetingService: MeetingsService,
    private userService: UsersService, private dialog: MatDialog) {
  }

  async ngOnInit() {
    const activeMeetingId = this.route.snapshot.paramMap.get('id');
    this.activeMeeting = await this.meetingService.getOne(activeMeetingId);
    this.tasksList = [];
  }

  save() {
    this.meetingService.update(this.activeMeeting);
  }

  addATask() {
    const dialogRef = this.dialog.open(MeetingTaskComponent, {
      width: '250px',
      data: { meetingId: this.activeMeeting.id, actors: this.activeMeeting.invited }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {this.tasksList.push(result); }
    });
  }
}

