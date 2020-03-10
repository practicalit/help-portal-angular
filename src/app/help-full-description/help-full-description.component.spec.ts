import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFullDescriptionComponent } from './help-full-description.component';

describe('HelpFullDescriptionComponent', () => {
  let component: HelpFullDescriptionComponent;
  let fixture: ComponentFixture<HelpFullDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpFullDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
