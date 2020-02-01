import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment'; 

/**
 * Authentication handler service.
 * 
 * @author Kaleb W. <kaleb@solutionladder.com>
 * 
 */

const CURRENT_USER = 'currentUser';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  
  /**
   * Getter and setter for the logged property.
   * This property is being used across the components/directives
   * hence needs to be checked on the central service.
   * @see HomeComponent
   */
  get logged():Boolean {
    return localStorage.getItem(CURRENT_USER) != null;
  }

  public authenticate(email: String, password: String): Observable<any> {
    //server and end point are stored in the environment config
    return this.http.post<any>(
      `${environment.server}${environment.authEndPoint}`, {"email": email, "password": password}, headers
      );
  }

  public storeToken(user: any) {
    console.log('********************');
    console.log(user);
    localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  }

  public removeToken() {
    localStorage.removeItem(CURRENT_USER);
  }
  
  public getToken():String {
    if (this.logged) {
      let user = JSON.parse(localStorage.getItem(CURRENT_USER));
      return user.object.token;
    }

    return null;
  }
}
