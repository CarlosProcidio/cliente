import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  baseUrl = 'https://viacep.com.br/ws/';
  constructor(
    private http: HttpClient,
  ) { }

  public search(cep: string): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  get(cep: string) {
    return new Observable<any>((x) => {
      const request = new XMLHttpRequest();
      request.open('get', `https://viacep.com.br/ws/${cep}/json/`, true);
      request.send();
      request.onload = function() {
        const data = JSON.parse(this.response);
        x.next(data);
      };
    });
  }
}