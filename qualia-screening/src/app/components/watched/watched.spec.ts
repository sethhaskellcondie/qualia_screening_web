import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Watched } from './watched';

describe('Watched', () => {
  let component: Watched;
  let fixture: ComponentFixture<Watched>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Watched],
    }).compileComponents();

    fixture = TestBed.createComponent(Watched);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
