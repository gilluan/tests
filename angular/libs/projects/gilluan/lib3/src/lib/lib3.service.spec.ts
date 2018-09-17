import { TestBed, inject } from '@angular/core/testing';

import { Lib3Service } from './lib3.service';

describe('Lib3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lib3Service]
    });
  });

  it('should be created', inject([Lib3Service], (service: Lib3Service) => {
    expect(service).toBeTruthy();
  }));
});
