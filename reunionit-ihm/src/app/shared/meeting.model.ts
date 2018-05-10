import { Room } from './room.model';
import { User } from './user.model';

export class Meeting {
    id: number;
    utctime: Date;
    duration: number;
    title: string;
    rooms: Array<Room>;
    users: Array<User>;
}
