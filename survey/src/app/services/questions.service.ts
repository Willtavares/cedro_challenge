import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dynamic } from '../model/dynamic.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  baseUrl = 'http://localhost:3000';
  setDynamic = '/dynamic';
  setFixed = '/fixed';

  constructor(private http: HttpClient) {}

  getDynamicQuestions(): Observable<Dynamic> {
    return this.http.get<Dynamic>(this.baseUrl + this.setDynamic);
  }
}
