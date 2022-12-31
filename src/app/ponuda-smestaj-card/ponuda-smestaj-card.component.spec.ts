import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonudaSmestajCardComponent } from './ponuda-smestaj-card.component';

describe('PonudaSmestajCardComponent', () => {
  let component: PonudaSmestajCardComponent;
  let fixture: ComponentFixture<PonudaSmestajCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonudaSmestajCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonudaSmestajCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
