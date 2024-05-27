import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhonesDataService {
  constructor(private http: HttpClient) {}

  getPhoneData() {
    const url = 'https://dummyjson.com/products/search?q=phone';
    return this.http.get(url);
  }
}
