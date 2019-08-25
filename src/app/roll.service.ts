import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  private apiUrl = 'https://roll-service.herokuapp.com'

  constructor(private http: HttpClient) { }

  getRoll(id:string, num:number): Observable<number[]> {
    return this.http.get<number[]>(this.apiUrl+`/${id}/${num}`);
  }
};