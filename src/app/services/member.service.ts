import { Injectable } from '@angular/core';
import { Member } from '../models/Member';

import { environment } from '../../environments/environment'; 

import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

/**
 * @author Practical IT <info@thepracticalit.com>
 * 
 * Service responsible for things related to member.
 */

@Injectable({
  providedIn: 'root'
})
export class MemberService extends BaseService{
member:Member;
  constructor(private httpClient: HttpClient, private authService: AuthenticationService) {
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
   * Send the new member information to the server.
   * @param member 
   * @returns Observable<any>
   */
  public update(member: Member): Observable<any> {
    return this.httpClient.put<any>(
      `${environment.server}${environment.memberEndPoint}`, 
      member, 
      this.getHeaderWithAuth()
    );
  }

  /**
   * Get the remaining balance of the logged member.
   */
  public getBalance(): Observable<any> {
    /* 
     * This need to be refactored to be used in interceptor
     */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.httpClient.get<any>(
      `${environment.server}${environment.balanceEndPoint}`,  
      headers
    );
  }
  
  /*
   * Method to handle password reset
   * @param email 
   */
  public resetPassword(email:string):Observable<any> {
    return this.httpClient.post<any>(
      `${environment.server}${environment.forgotPasswordEndPoint}/[id]`, 
      {'email': email}, 
      this.getBasicHeader()
    );
  }

  private getHeaderWithAuth() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
  }
   public getMemberProfile(): Observable<any> {
    return this.httpClient.get<any>(
       `${environment.server}${environment.memberProfileEndPoint}`,
      this.getHeaderWithToken()) 
    }

   private getHeaderWithToken() {
   return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
       })
    };
   }

  // let headers = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.authService.getToken()}`
  //   })
  // }; return this.http.get<Help[]>(
  //   `${environment.server}${environment.helpListEndPoint}`, 
    
  //   headers)
  // }

}
