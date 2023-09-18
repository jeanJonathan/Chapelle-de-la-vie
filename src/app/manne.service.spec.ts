import { TestBed } from '@angular/core/testing';

import { ManneService } from './manne.service';

describe('ManneService', () => {
  let service: ManneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
