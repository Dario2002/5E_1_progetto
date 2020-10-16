import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsanComponent } from './asan.component';

describe('AsanComponent', () => {
  let component: AsanComponent;
  let fixture: ComponentFixture<AsanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
