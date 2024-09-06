import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllToolsComponent } from './show-all-tools.component';

describe('ShowAllToolsComponent', () => {
  let component: ShowAllToolsComponent;
  let fixture: ComponentFixture<ShowAllToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAllToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
