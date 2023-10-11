import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecasttableComponent } from './forecasttable.component';

describe('ForecasttableComponent', () => {
  let component: ForecasttableComponent;
  let fixture: ComponentFixture<ForecasttableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecasttableComponent]
    });
    fixture = TestBed.createComponent(ForecasttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
