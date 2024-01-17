import { TestBed } from '@angular/core/testing';

import { ConsumerProdutService } from './consumer-produt.service';

describe('ConsumerProdutService', () => {
  let service: ConsumerProdutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumerProdutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
