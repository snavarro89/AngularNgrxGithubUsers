import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment' 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(perPage: number = 50, since: number = 0): Observable<any>{
    let params = new HttpParams()
    params = params.append('per_page',perPage)
    params = params.append('since', since)
    return this.http.get<any>(`${environment.githubUrl}/users`, {params: params})
  }


  getUser(userName: string = ''): Observable<any>{
    return this.http.get<any>(`${environment.githubUrl}/users/${userName}`)
  }
}
