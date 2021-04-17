import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AddFundComponent } from './add-fund.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StripeModule } from 'stripe-angular';

describe('AddFundComponent', () => {
  let component: AddFundComponent;
  let fixture: ComponentFixture<AddFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
          BrowserModule,
          FormsModule,
    [ StripeModule.forRoot("pk_test_fREbU3WRBD9u30BhtLihVNTz") ]
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
