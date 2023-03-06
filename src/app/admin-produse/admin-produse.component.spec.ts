import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProduseComponent } from './admin-produse.component';

describe('AdminProduseComponent', () => {
  let component: AdminProduseComponent;
  let fixture: ComponentFixture<AdminProduseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProduseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
