import { TestBed } from '@angular/core/testing';

import { PregledSobeService } from './pregled-sobe.service';

describe('PregledSobeService', () => {
  let service: PregledSobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregledSobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
