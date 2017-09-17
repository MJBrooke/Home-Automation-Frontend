import { TestBed, inject } from '@angular/core/testing';

import { FlowServiceService } from './flow-service.service';

describe('FlowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowServiceService]
    });
  });

  it('should be created', inject([FlowServiceService], (service: FlowServiceService) => {
    expect(service).toBeTruthy();
  }));
});
