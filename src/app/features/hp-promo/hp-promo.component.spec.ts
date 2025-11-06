import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HpPromoComponent} from './hp-promo.component';

describe('HpPromoComponent', () => {
  let component: HpPromoComponent;
  let fixture: ComponentFixture<HpPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpPromoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HpPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
