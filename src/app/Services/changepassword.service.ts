import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  private apiUrl = 'http://localhost:11561/api/Account/change-password';

  constructor(private http: HttpClient) {}

  changePassword(oldPassword: string, newPassword: string): Observable<any> {
    const body = { oldPassword, newPassword };
    return this.http.post<any>(`${this.apiUrl}/change-password`, body);
  }

}
