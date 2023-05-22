import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinPageComponent } from './loadin-page.component';

describe('LoadinPageComponent', () => {
  let component: LoadinPageComponent;
  let fixture: ComponentFixture<LoadinPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadinPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
