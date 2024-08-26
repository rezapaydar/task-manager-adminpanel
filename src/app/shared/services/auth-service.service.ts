import { Injectable } from '@angular/core';
import { responseLogin } from '../models/loginresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private tokenKey = 'authToken';
  username = 'username';

  constructor() { }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  saveUserInfo(userInfo: responseLogin){
    localStorage.setItem('username', JSON.stringify(userInfo));
  }

  getUserInfo():string|any{
    return localStorage.getItem(this.username);
  }

}
