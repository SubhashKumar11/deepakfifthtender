import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-book-tender',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './book-tender.html',
  styleUrl: './book-tender.css'
})
export class BookTender {
customerFormData = {
    name: '',
    date: '',
    time: '',
    companylocation: '',
   tenderfillinglocation: '',
    phonenumber: '',
    email: '',
  };
  constructor(private toaster: ToastrService) {}
  async placeCustomerToDbAdminMail() {
    emailjs.init('ZUbY0a7JPwOahxOTw');
    let res = await emailjs.send('service_difta1f', 'template_u6eh3r6', {
      to_name: 'Hi SRB Consultancy!',
      from_name: this.customerFormData.name,
      from_email: this.customerFormData.email,
      name: this.customerFormData.name,
      date: this.customerFormData.date,
      time: this.customerFormData.time,
      subject: 'Tender booking details!',
      companylocation: this.customerFormData.companylocation,
      tenderfillinglocation: this.customerFormData.tenderfillinglocation,
      phonenumber: this.customerFormData.phonenumber,
      email: this.customerFormData.email,
    });
    // alert("Booking Successful!");
    //console.log(this.customerFormData);
    this.showSuccess();
   // this.reloadCurrentPage();
  }
  showSuccess() {
    this.toaster.success('Consultancy book successfully!', 'Hurray!', {
       timeOut : 8000,
      closeButton: true,
    });
  }
  reloadCurrentPage() {
    window.location.reload();
  }
}
