import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    const url = `${this.urlApi}/all`;
    return this.http.get<any> (url);
  }

  public getByName(name:string): Observable<any>{
    const url = `${this.urlApi}/name/${name}`;
    return this.http.get<any> (url);
  }


}
