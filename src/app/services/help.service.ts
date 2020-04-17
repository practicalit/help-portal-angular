import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Help } from '../models/Help'; 
import { BaseService } from './base.service';
import { Comment } from '../models/Comment'; 
@Injectable({
  providedIn: 'root'
})
export class HelpService extends BaseService {

  constructor(private authService: AuthenticationService, private http: HttpClient) {
    super();
   }

  /**
   * Fetch the list of helps from the server and display them.
   * @return Observable
   */
  public getHelps():Observable<Help[]> {

    /* 
     * This need to be refactored to be used in interceptor
     */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Help[]>(
      `${environment.server}${environment.helpEndPoint}`, 
      headers)
  }

  /**
   * Method to handle creating new help request.
   * @param help 
   * @return Observable
   */
  public createHelp(help: Help): Observable<any> {
    /*
     * This has to be moved to the interceptor. We can't all the time
     * add the token here and there..
     */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.post<any>(
      `${environment.server}${environment.helpEndPoint}`, 
      help, headers
      );
  }

  /**
   * Read help and category types from backend.
   */
  public getHelpAndCategoryTypes() {
    //categoryAndHelpTypeEndPont
        /* 
     * This need to be refactored to be used in interceptor
     */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Help[]>(
      `${environment.server}${environment.categoryAndHelpTypeEndPont}`, 
      headers)
  }

  /**
   * 
   * @param id 
   * @return Observable
   */
  public getHelpDetail(id: number): Observable<any> {
    //add validation if id is blank or invalid.
    return this.http.get<any>(
      `${environment.server}${environment.helpEndPoint}/${id}`, 
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
  // help-Description 
  public postComment(comment: Comment): Observable<any> {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    let c = {"help":{"id":"1"}, "comment": "My Comment here","resource":{"id":1}};
    return this.http.post<any>(
     //'http://localhost:4200/home/help/comments',
     `${environment.server}${environment.helpDescriptionCommentEndPoint}`,
     c,headers
      );
  }

}
