import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../shared/task.model';
import { FormControl } from '@angular/forms';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-meeting-task',
    templateUrl: './meeting.task.component.html'
})
export class MeetingTaskComponent implements OnInit {
    currentTask: Task;
    users: Array<User>;
    filteredUsers: User[];

    constructor(public dialogRef: MatDialogRef<MeetingTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
        this.currentTask = new Task();
    }

    ngOnInit() {
        this.currentTask.meetingId = this.data.meetingId;
        this.users = this.data.actors;
        if (this.currentTask.who) {
            this.filteredUsers = this.filter(this.currentTask.who.name);
        } else {
            this.filteredUsers = this.users;
        }
    }

    filterUsers(keyEvent: KeyboardEvent) {
        if (typeof this.currentTask.who === 'string') {
            this.filteredUsers = this.filter(this.currentTask.who);
        }
    }

    filter(name: any): User[] {
        return this.users.filter(user =>
            user.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }

    displayFn(user?: User): string | undefined {
        return user ? user.name : undefined;
    }

    cancelNewTask(): void {
        this.dialogRef.close();
    }
}
