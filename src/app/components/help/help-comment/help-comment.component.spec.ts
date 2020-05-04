import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCommentComponent } from './help-comment.component';

describe('HelpCommentComponent', () => {
  let component: HelpCommentComponent;
  let fixture: ComponentFixture<HelpCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
