import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipyComponent } from './zipy.component';

describe('ZipyComponent', () => {
  let component: ZipyComponent;
  let fixture: ComponentFixture<ZipyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
