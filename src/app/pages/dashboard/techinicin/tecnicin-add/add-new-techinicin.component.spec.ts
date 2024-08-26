import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShopComponent } from './add-new-shop.component';

describe('AddNewShopComponent', () => {
  let component: AddNewShopComponent;
  let fixture: ComponentFixture<AddNewShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
