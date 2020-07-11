import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoryserviceService {
  private url='https://wafflehouseappservice.azurewebsites.net/api/stories';
  constructor(private http:HttpClient) { 

  }

  getStories(){
    return this.http.get(this.url);
  }
}
