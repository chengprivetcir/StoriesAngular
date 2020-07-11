import { StoryserviceService } from './storyservice.service';
import { AppComponent } from './app.component';
import { Observable, from  } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

describe('AppComponent', () => {
  let component:AppComponent;
  let service:StoryserviceService;
  let spinner: NgxSpinnerService; 
  beforeEach(()=>{
     spinner = new NgxSpinnerService();
     service = new StoryserviceService(null);
     component = new AppComponent(service,spinner);
  })

  it('should have stories array from server', () => {
    let todos = [1, 2, 3];

    spyOn(service, 'getStories').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();

    expect(component.stories.length).toBe(3);

  });

});
