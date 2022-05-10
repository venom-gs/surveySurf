import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowqueComponent } from './showque.component';

describe('ShowqueComponent', () => {
  let component: ShowqueComponent;
  let fixture: ComponentFixture<ShowqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
