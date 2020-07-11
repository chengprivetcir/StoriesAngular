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
  public maxSize: number = 5;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
 
  config: any;

   stories= [];
   searchText;
   constructor(private service :StoryserviceService,private spinner: NgxSpinnerService){}

   ngOnInit(){
    this.config = {
      itemsPerPage: 20,
      currentPage: 1,
      totalItems: this.stories.length
    };
     this.spinner.show();
     this.service.getStories().subscribe((data: any[])=>{
      this.spinner.hide();  
      console.log(data);
      this.stories = data;
    })
   
   }
   onPageChange(event){

    this.config.currentPage = event;
  }
}