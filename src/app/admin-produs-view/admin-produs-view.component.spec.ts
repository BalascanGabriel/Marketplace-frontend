import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdusViewComponent } from './admin-produs-view.component';

describe('AdminProdusViewComponent', () => {
  let component: AdminProdusViewComponent;
  let fixture: ComponentFixture<AdminProdusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdusViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProdusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
