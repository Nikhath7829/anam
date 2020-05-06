import { TestBed } from '@angular/core/testing';

import { LanguageservicesService } from './languageservices.service';

describe('LanguageservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LanguageservicesService = TestBed.get(LanguageservicesService);
    expect(service).toBeTruthy();
  });
});
