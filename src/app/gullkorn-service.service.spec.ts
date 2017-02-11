/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GullkornService } from './gullkorn-service.service';

describe('GullkornServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GullkornService]
    });
  });

  it('should ...', inject([GullkornService], (service: GullkornService) => {
    expect(service).toBeTruthy();
  }));
});
