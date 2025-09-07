import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../footer/footer';
import { Testimonials } from '../testimonials/testimonials';
import { BookTender } from '../book-tender/book-tender';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,RouterModule,Footer,Testimonials,BookTender],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
