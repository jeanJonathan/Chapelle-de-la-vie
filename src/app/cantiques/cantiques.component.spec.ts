import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantiquesComponent } from './cantiques.component';

describe('CantiquesComponent', () => {
  let component: CantiquesComponent;
  let fixture: ComponentFixture<CantiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
