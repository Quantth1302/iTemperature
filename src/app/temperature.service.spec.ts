import { TestBed } from '@angular/core/testing';

import { TemperatureService } from './temperature.sevice';

describe('TemperatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureService = TestBed.get(TemperatureService);
    expect(service).toBeTruthy();
  });
});
