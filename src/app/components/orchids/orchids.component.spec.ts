import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchidsComponent } from './orchids.component';

describe('OrchidsComponent', () => {
  let component: OrchidsComponent;
  let fixture: ComponentFixture<OrchidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrchidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrchidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
