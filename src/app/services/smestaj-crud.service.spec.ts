import { TestBed } from '@angular/core/testing';

import { SmestajCrudService } from './smestaj-crud.service';

describe('SmestajCrudService', () => {
  let service: SmestajCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmestajCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
