import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractwoComponent } from './practwo.component';

describe('PractwoComponent', () => {
  let component: PractwoComponent;
  let fixture: ComponentFixture<PractwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PractwoComponent]
    });
    fixture = TestBed.createComponent(PractwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
