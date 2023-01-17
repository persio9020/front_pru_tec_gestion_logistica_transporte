import { TestBed } from '@angular/core/testing';

import { PlanEntregaTerrestreService } from './plan-entrega-terrestre.service';

describe('PlanEntregaTerrestreService', () => {
  let service: PlanEntregaTerrestreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanEntregaTerrestreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
