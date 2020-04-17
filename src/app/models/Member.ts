
/**
 * Model representing member
 * 
 * @author Practical IT <info@thepracticalit.com>
 */
export class Member {
    id?: number;
    email: String;
    firstName: string;
    lastName: string;
    password?: String;
    dateCreated?: Date;
    dateOfBirth?: Date;
    gender: string;
}
