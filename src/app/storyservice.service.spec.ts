import { TestBed } from '@angular/core/testing';

import { StoryserviceService } from './storyservice.service';

xdescribe('StoryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryserviceService = TestBed.get(StoryserviceService);
    expect(service).toBeTruthy();
  });
});
