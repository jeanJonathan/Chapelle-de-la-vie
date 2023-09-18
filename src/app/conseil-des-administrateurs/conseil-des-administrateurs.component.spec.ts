import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilDesAdministrateursComponent } from './conseil-des-administrateurs.component';

describe('ConseilDesAdministrateursComponent', () => {
  let component: ConseilDesAdministrateursComponent;
  let fixture: ComponentFixture<ConseilDesAdministrateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilDesAdministrateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilDesAdministrateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
