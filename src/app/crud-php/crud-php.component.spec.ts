import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPhpComponent } from './crud-php.component';

describe('CrudPhpComponent', () => {
  let component: CrudPhpComponent;
  let fixture: ComponentFixture<CrudPhpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPhpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
