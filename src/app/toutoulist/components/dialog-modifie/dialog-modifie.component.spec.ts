import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifieComponent } from './dialog-modifie.component';

describe('DialogModifieComponent', () => {
  let component: DialogModifieComponent;
  let fixture: ComponentFixture<DialogModifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
