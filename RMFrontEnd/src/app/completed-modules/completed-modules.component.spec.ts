import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedModulesComponent } from './completed-modules.component';

describe('CompletedModulesComponent', () => {
  let component: CompletedModulesComponent;
  let fixture: ComponentFixture<CompletedModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
