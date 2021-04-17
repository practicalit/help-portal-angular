import { TestBed } from '@angular/core/testing';

import { HelpService } from './help.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HelpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HelpService]
  }));
  it('should be created', () => {
    const service: HelpService = TestBed.get(HelpService);
    expect(service).toBeTruthy();
  });
});
