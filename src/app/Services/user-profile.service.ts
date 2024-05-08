import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../Interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:5019';
  constructor(private http: HttpClient,) { }

  getInfo(): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem("token")}`);
    const headers = new HttpHeaders().set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWxpIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzODg2ZDk2ZS04NDhkLTQ1NTUtOGIyZS1iNzkyZmY5ZjU3NjciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDVVNUT01FUiIsImV4cCI6MTcxNTEwODIyNiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.H-PBQPxa_0FDM8CZtYrdNTN9YPkJjy0lLfRMsWj59hM`);
    //console.log(localStorage.getItem("token"));
    return this.http.get(`${this.apiUrl}/api/account/getuser`, {headers});
  }

  setInfo(userData: UserProfile): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem("token")}`);
    const headers = new HttpHeaders().set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWxpIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIzODg2ZDk2ZS04NDhkLTQ1NTUtOGIyZS1iNzkyZmY5ZjU3NjciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDVVNUT01FUiIsImV4cCI6MTcxNTEwODIyNiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDE5LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NDIwMCJ9.H-PBQPxa_0FDM8CZtYrdNTN9YPkJjy0lLfRMsWj59hM`);
    //console.log(localStorage.getItem("token"));
    return this.http.post(`${this.apiUrl}/api/account/EditProfile`,userData, {headers});
  }
}
