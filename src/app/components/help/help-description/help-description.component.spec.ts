import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDescriptionComponent } from './help-description.component';

import {HttpClientModule} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('HelpDescriptionComponent', () => {
  let component: HelpDescriptionComponent;
  let fixture: ComponentFixture<HelpDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDescriptionComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
