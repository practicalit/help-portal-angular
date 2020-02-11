import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'; 

/**
 * @author practical it
 * 
 * Service responsible for things related to member.
 */
@Injectable({
  providedIn: 'root'
})
export class BaseService{

  constructor() { }

  /**
   * get basic http header to be used by child classes.
   */
  public getBasicHeader() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}
