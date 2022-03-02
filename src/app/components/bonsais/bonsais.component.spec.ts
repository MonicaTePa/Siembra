import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonsaisComponent } from './bonsais.component';

describe('BonsaisComponent', () => {
  let component: BonsaisComponent;
  let fixture: ComponentFixture<BonsaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonsaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonsaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
