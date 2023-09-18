import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDuPasteurComponent } from './mot-du-pasteur.component';

describe('MotDuPasteurComponent', () => {
  let component: MotDuPasteurComponent;
  let fixture: ComponentFixture<MotDuPasteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotDuPasteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotDuPasteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
