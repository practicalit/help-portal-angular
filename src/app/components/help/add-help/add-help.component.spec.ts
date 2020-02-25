import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpComponent } from './add-help.component';

describe('AddHelpComponent', () => {
  let component: AddHelpComponent;
  let fixture: ComponentFixture<AddHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
