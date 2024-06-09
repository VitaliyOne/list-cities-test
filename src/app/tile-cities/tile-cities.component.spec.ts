import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCitiesComponent } from './tile-cities.component';

describe('TileCitiesComponent', () => {
  let component: TileCitiesComponent;
  let fixture: ComponentFixture<TileCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileCitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TileCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
