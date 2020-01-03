import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedModulesComponent } from './assigned-modules.component';

describe('AssignedModulesComponent', () => {
  let component: AssignedModulesComponent;
  let fixture: ComponentFixture<AssignedModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
