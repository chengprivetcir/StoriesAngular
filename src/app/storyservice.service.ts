import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryserviceService {

  constructor(private http:HttpClient) { 
  }

  getStories(){
    return this.http.get(environment.apiUrl);
  }
}
