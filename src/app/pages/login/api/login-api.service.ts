import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../../../shared/services/auth-service.service';
import { responseLogin } from '../../../shared/models/loginresponse';

interface adminLogin {
  username: string;
  password: string;
}




@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  private apiUrl = 'http://192.168.4.114:8081'; // Replace with your API endpoint

  constructor(private http: HttpClient,private auth:AuthServiceService) { }

  login(data:adminLogin): Observable<any[]> | any {
 
       return this.http.post<any[]>(this.apiUrl+'/admins/login',data)
  }

  createUser(user: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(this.apiUrl,  { headers });
  }

  deleteUser(userId: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }
}
