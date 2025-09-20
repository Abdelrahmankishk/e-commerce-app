import { TestBed } from '@angular/core/testing';

import { DetailsServ } from './details-serv';

describe('DetailsServ', () => {
  let service: DetailsServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
