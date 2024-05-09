import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-detailes',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLinkActive, RouterLink],
  templateUrl: './detailes.component.html',
  styleUrl: './detailes.component.css',
})
export class DetailesComponent {
  fileName = ' No file chosen';
  
  constructor(private formBuilder: FormBuilder) {}
  requestForm: FormGroup = this.formBuilder.group({
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  ratingForm: FormGroup = this.formBuilder.group({
    rating: ['', Validators.required],
    fullName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  onSubmitReview() {
    if (this.ratingForm.valid) {
      // Send the form data to backend or perform any required action
      console.log('Form submitted successfully!', this.ratingForm.value);
    } else {
      // Handle form validation errors
      console.error('Form validation failed!');
    }
  }

  onSubmitRequest() {
    if (this.requestForm.valid) {
      // Send the form data to backend or perform any required action
      console.log('Form submitted successfully!', this.requestForm.value);
    } else {
      // Handle form validation errors
      console.error('Form validation failed!');
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      if (file.name.length > 20) {
        this.fileName = file.name.slice(0, 20) + '...';
      } else {
        this.fileName = file.name;
      }
    } else {
      this.fileName = 'No file chosen';
    }
  }
}
