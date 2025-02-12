import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private apiUrl = 'http://localhost:3000/words#words';

  constructor(private http: HttpClient) {}

  getWords(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
