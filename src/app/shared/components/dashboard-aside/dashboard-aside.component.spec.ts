import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsideComponent } from './dashboard-aside.component';

describe('DashboardAsideComponent', () => {
  let component: DashboardAsideComponent;
  let fixture: ComponentFixture<DashboardAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
