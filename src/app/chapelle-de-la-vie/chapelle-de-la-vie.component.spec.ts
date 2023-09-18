import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapelleDeLaVieComponent } from './chapelle-de-la-vie.component';

describe('ChapelleDeLaVieComponent', () => {
  let component: ChapelleDeLaVieComponent;
  let fixture: ComponentFixture<ChapelleDeLaVieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapelleDeLaVieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapelleDeLaVieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
