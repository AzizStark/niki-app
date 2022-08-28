import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesignationModalComponent } from './add-designation-modal.component';

describe('AddDesignationModalComponent', () => {
  let component: AddDesignationModalComponent;
  let fixture: ComponentFixture<AddDesignationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesignationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDesignationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
