import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSecComponent } from './footer-sec.component';

describe('FooterSecComponent', () => {
  let component: FooterSecComponent;
  let fixture: ComponentFixture<FooterSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterSecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
