import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmestajComponent } from './add-smestaj-form.component';

describe('SmestajComponent', () => {
  let component: SmestajComponent;
  let fixture: ComponentFixture<SmestajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmestajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmestajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
