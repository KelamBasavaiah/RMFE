import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBugFixedModulesComponent } from './get-bug-fixed-modules.component';

describe('GetBugFixedModulesComponent', () => {
  let component: GetBugFixedModulesComponent;
  let fixture: ComponentFixture<GetBugFixedModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBugFixedModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBugFixedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
