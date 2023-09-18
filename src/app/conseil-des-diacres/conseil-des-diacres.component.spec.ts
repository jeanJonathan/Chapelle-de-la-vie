import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilDesDiacresComponent } from './conseil-des-diacres.component';

describe('ConseilDesDiacresComponent', () => {
  let component: ConseilDesDiacresComponent;
  let fixture: ComponentFixture<ConseilDesDiacresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilDesDiacresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilDesDiacresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
