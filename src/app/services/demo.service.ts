import { Injectable } from '@angular/core';
import { Idemo } from '../model/idemo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

   API="assets/api/demoapi.json";

  constructor( private http:HttpClient) { }
  getData():Observable<Idemo[]> {
    return this.http.get<Idemo[]>(this.API);
  }
}
