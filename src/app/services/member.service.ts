import { Injectable } from '@angular/core';
import { Member } from '../models/Member';

import { environment } from '../../environments/environment'; 

import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @author Practical IT <info@thepracticalit.com>
 * 
 * Service responsible for things related to member.
 */

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService{

  constructor(private httpClient: HttpClient) {
    super(); //this is calling the parent.
   }

  /**
   * Send the new member information to the server.
   * @param member 
   * @returns Observable<any>
   */
  public save(member: Member): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.server}${environment.memberEndPoint}`, 
      member, 
      this.getBasicHeader()
    );
  }

  /**
   * Method to handle password reset
   * @param email 
   */
  public resetPassword(email:string):Observable<any> {
    return this.httpClient.post<any>(
      `${environment.server}${environment.forgotPasswordEndPoint}`, 
      {'email': email}, 
      this.getBasicHeader()
    );
  }
}
