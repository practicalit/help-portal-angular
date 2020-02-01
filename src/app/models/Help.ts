import { Member } from '../models/Member';

export class Help {
    id?: number;
    message: string;
    title: string;
    dateCreated: Date;
    member?: Member;
}
