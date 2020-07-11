import { StoryserviceService } from './storyservice.service';
import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {Http} from '@angular/http';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
   stories= [];
   searchText;
   constructor(private service :StoryserviceService,private spinner: NgxSpinnerService){}

   ngOnInit(){
     this.spinner.show();
     this.service.getStories().subscribe((data: any[])=>{
      console.log(data);
      this.stories = data;
    })
    this.spinner.hide();  
   }
}