import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowqresultComponent } from './showqresult.component';

describe('ShowqresultComponent', () => {
  let component: ShowqresultComponent;
  let fixture: ComponentFixture<ShowqresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowqresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowqresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
