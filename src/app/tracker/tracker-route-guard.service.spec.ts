import { TestBed } from '@angular/core/testing';

import { TrackerRouteGuardService } from './tracker-route-guard.service';

describe('TrackerRouteGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackerRouteGuardService = TestBed.get(TrackerRouteGuardService);
    expect(service).toBeTruthy();
  });
});
