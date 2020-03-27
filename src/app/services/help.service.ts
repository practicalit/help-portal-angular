import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Help } from '../models/Help'; 
import { BaseService } from './base.service';
import { NullTemplateVisitor } from '@angular/compiler';

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
      `${environment.server}${environment.helpListEndPoint}`, 
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
      `${environment.server}${environment.helpListEndPoint}`, 
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
      `${environment.helpDetailEndPoint}`, 
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
}
