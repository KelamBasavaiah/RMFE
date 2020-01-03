import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesForDeveloperComponent } from './modules-for-developer.component';

describe('ModulesForDeveloperComponent', () => {
  let component: ModulesForDeveloperComponent;
  let fixture: ComponentFixture<ModulesForDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesForDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesForDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
