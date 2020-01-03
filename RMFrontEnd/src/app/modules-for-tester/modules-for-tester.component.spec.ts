import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesForTesterComponent } from './modules-for-tester.component';

describe('ModulesForTesterComponent', () => {
  let component: ModulesForTesterComponent;
  let fixture: ComponentFixture<ModulesForTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesForTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesForTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
