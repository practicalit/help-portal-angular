import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpComponent } from './add-help.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddHelpComponent', () => {
  let component: AddHelpComponent;
  let fixture: ComponentFixture<AddHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHelpComponent ],
      imports: [

    HttpClientModule,
    ReactiveFormsModule
      ]
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
