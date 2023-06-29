import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanlistComponent } from './scanlist.component';

describe('ScanlistComponent', () => {
  let component: ScanlistComponent;
  let fixture: ComponentFixture<ScanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
