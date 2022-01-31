import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustumerComponent } from './add-custumer.component';

describe('AddCustumerComponent', () => {
  let component: AddCustumerComponent;
  let fixture: ComponentFixture<AddCustumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
