import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvdetailComponent } from './provdetail.component';

describe('ProvdetailComponent', () => {
  let component: ProvdetailComponent;
  let fixture: ComponentFixture<ProvdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
