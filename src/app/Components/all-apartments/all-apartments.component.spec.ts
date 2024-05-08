import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApartmentsComponent } from './all-apartments.component';

describe('AllApartmentsComponent', () => {
  let component: AllApartmentsComponent;
  let fixture: ComponentFixture<AllApartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllApartmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
