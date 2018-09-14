import { TestBed, inject } from '@angular/core/testing';

import { Lib2Service } from './lib2.service';

describe('Lib2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lib2Service]
    });
  });

  it('should be created', inject([Lib2Service], (service: Lib2Service) => {
    expect(service).toBeTruthy();
  }));
});
