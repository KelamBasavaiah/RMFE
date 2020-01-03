import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugDetailsForDeveloperComponent } from './bug-details-for-developer.component';

describe('BugDetailsForDeveloperComponent', () => {
  let component: BugDetailsForDeveloperComponent;
  let fixture: ComponentFixture<BugDetailsForDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugDetailsForDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugDetailsForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
