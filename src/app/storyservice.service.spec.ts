import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { StoryserviceService } from './storyservice.service';
import { environment } from 'src/environments/environment';

describe('StoryserviceService', () => {
  
  let service: StoryserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [HttpClientModule,HttpClientTestingModule],
          providers: [StoryserviceService]
      });
      service = TestBed.get(StoryserviceService);
      httpMock = TestBed.get(HttpTestingController);
  });

  it('should call http request api', () => {
    const stories = [{title: 'a'}, {title: 'b'}];

    service.getStories().subscribe(res=>{
      expect(res).toEqual(stories);
    })
    const req = httpMock.expectOne(request => request.url === environment.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(stories);
    httpMock.verify();
  });
});
