import { StoryserviceService } from './storyservice.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   p: number = 1;
   stories= [];
   searchText;

   constructor(private service :StoryserviceService,private spinner: NgxSpinnerService){}
   ngOnInit(){

     this.spinner.show();
     this.service.getStories().subscribe(
       (data: any[])=>{
      this.spinner.hide();  
      console.log(data);
      this.stories = data;
      },
      ()=>{this.spinner.hide();
      })
   }
}