import { User } from './user.model';
import { Meeting } from './meeting.model';

export class Task {
    id: string;
    what: string;
    who: User;
    when: Date;
    meetingId: number;
}
