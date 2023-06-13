import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioCardComponent } from './anuncio-card.component';

describe('AnuncioCardComponent', () => {
  let component: AnuncioCardComponent;
  let fixture: ComponentFixture<AnuncioCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnuncioCardComponent]
    });
    fixture = TestBed.createComponent(AnuncioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
