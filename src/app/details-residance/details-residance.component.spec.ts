import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsResidanceComponent } from './details-residance.component';

describe('DetailsResidanceComponent', () => {
  let component: DetailsResidanceComponent;
  let fixture: ComponentFixture<DetailsResidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsResidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsResidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
