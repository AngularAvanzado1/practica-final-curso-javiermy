import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@pf/ui';
import { LuiModule } from '@pf/lui'
import { HomeComponent } from './Home/home.component';
import { HomeModule } from './Home/Home.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiModule, LuiModule, HomeModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it(`should have as title 'Worldb'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('World B');
  });

  it('THEN: should render header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('pb-lui-header').textContent);
  });

  it('THEN: should render footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('pb-lui-footer').textContent);
  });

  it(`THEN: should render a H1 tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1'));
  });

  it(`THEN: should render a wb-home tag`, () => {
    const fixturee = TestBed.createComponent(HomeComponent);
    fixturee.detectChanges();
    const compiled = fixturee.debugElement.nativeElement;
    expect(compiled.querySelector('wb-home'));
  });

});
