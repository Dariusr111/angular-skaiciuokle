import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalpaComponent } from './talpa.component';

describe('TalpaComponent', () => {
  let component: TalpaComponent;
  let fixture: ComponentFixture<TalpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
