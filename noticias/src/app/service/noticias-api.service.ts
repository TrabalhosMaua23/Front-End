import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasApiService {

  constructor(private _http:HttpClient) { }

  // Back-End
  noticiasApiUrl = 'http://localhost:4000/api/noticias'

  topHeading(): Observable<any> {
    return this._http.get(this.noticiasApiUrl);
  }
}
