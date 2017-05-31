import { TestBed, inject } from '@angular/core/testing';

import { AppCollumnService } from './app-collumn.service';

describe('AppCollumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppCollumnService]
    });
  });

  it('should ...', inject([AppCollumnService], (service: AppCollumnService) => {
    expect(service).toBeTruthy();
  }));
});
