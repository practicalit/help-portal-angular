import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Help } from '../models/Help'; 
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HelpService extends BaseService {

  constructor(private authService: AuthenticationService, private http: HttpClient) {
    super();
   }

  /**
   * Fetch the list of helps from the server.
   */
  public getHelps():Observable<Help[]> {

    /* 
     * This need to be refactored to be used in interceptor
     */
    this.getBasicHeader().headers.append('Authorization', `Bearer ${this.authService.getToken()}`);
    return this.http.get<Help[]>(
      `${environment.server}${environment.helpListEndPoint}`, 
      this.getBasicHeader())
  }
}
