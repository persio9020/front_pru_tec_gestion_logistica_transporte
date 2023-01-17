import { TestBed } from '@angular/core/testing';

import { PlanEntregaMaritimoService } from './plan-entrega-maritimo.service';

describe('PlanEntregaMaritimoService', () => {
  let service: PlanEntregaMaritimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanEntregaMaritimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
