import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidocComponent } from './aidoc.component';

describe('AidocComponent', () => {
  let component: AidocComponent;
  let fixture: ComponentFixture<AidocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
