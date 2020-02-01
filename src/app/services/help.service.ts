import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Help } from '../models/Help'; 

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor(private authService: AuthenticationService, private http: HttpClient) { }

  /**
   * Fetch the data from the remote server.
   */
  public getHelps():Observable<Help[]> {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };

    return this.http.get<Help[]>(
      `${environment.server}${environment.helpListEndPoint}`, headers)
  }
}
