import { async, TestBed } from '@angular/core/testing';
import { LuiModule } from './lui.module';

describe('LuiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LuiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LuiModule).toBeDefined();
  });
});
