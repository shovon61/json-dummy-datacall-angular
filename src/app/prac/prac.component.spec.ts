import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracComponent } from './prac.component';

describe('PracComponent', () => {
  let component: PracComponent;
  let fixture: ComponentFixture<PracComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PracComponent]
    });
    fixture = TestBed.createComponent(PracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
