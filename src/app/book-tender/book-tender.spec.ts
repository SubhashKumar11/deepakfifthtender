import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTender } from './book-tender';

describe('BookTender', () => {
  let component: BookTender;
  let fixture: ComponentFixture<BookTender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTender]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTender);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
