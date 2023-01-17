import { TestBed } from '@angular/core/testing';

import { RegistreseService } from './registrese.service';

describe('RegistreseService', () => {
  let service: RegistreseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistreseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
