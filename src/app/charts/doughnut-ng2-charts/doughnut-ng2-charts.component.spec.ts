import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutNg2ChartsComponent } from './doughnut-ng2-charts.component';

describe('DoughnutNg2ChartsComponent', () => {
  let component: DoughnutNg2ChartsComponent;
  let fixture: ComponentFixture<DoughnutNg2ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughnutNg2ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutNg2ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
