import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastingComponent } from './casting.component';

describe('CastingComponent', () => {
  let component: CastingComponent;
  let fixture: ComponentFixture<CastingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastingComponent]
    });
    fixture = TestBed.createComponent(CastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
