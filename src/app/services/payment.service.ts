import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deposit } from '../models/Deposit';
import { environment } from '../../environments/environment'; 
import { BaseService } from './base.service';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
/**
 * Service responsible for payment related things. 
 * 
 * @author practical it
 */
export class PaymentService extends BaseService{

  constructor(private httpClient: HttpClient,
    private authService:AuthenticationService) { 
    super();
  }

  /**
   * Add deposit from member.
   * 
   * @param deposit 
   */
  addDeposit(deposit: Deposit): Observable<any> {
    /* 
     * This need to be refactored to be used in interceptor
     */
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.authService.getToken()}`
      })
    };
    return this.httpClient.post<any>(
      `${environment.server}${environment.depositEndPoint}`, 
      deposit, headers
    );
  }
}
