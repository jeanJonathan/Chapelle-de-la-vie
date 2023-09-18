import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcodimComponent } from './ecodim.component';

describe('EcodimComponent', () => {
  let component: EcodimComponent;
  let fixture: ComponentFixture<EcodimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcodimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcodimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
