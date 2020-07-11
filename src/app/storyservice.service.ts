import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable()
export class StoryserviceService {

  constructor(private http:HttpClient) { 
  }

  getStories(){
    console.log(environment.apiUrl);
    return this.http.get(environment.apiUrl);
  }
}
