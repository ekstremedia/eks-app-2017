/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GullkornServiceService } from './gullkorn-service.service';

describe('GullkornServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GullkornServiceService]
    });
  });

  it('should ...', inject([GullkornServiceService], (service: GullkornServiceService) => {
    expect(service).toBeTruthy();
  }));
});
