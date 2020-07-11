import { StoryserviceService } from './storyservice.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

   pageSize: number = 1;
   stories= [];
   searchText;

   constructor(private service :StoryserviceService,private spinner: NgxSpinnerService){

   }

   ngOnInit(){
     //loading News
     this.spinner.show();
     //http request
     this.service.getStories().subscribe(
      //Success 
       (data: any[])=>{
        this.spinner.hide();  
        this.stories = data;
      },
      //Error 
        ()=>{this.spinner.hide();
    })
   }
}