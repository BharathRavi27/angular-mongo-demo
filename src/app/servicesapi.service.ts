import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesapiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:5000';
  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
