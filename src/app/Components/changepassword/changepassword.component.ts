import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChangepasswordService } from '../../Services/changepassword.service';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private MyService: ChangepasswordService) { }

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.error = 'New password and confirm password do not match';
      return;
    }

    this.MyService.changePassword(this.oldPassword, this.newPassword)
      .subscribe(
        () => {
          this.error = '';
          alert('Password changed successfully');
        },
        error => {
          this.error = error;
        }
      );
  }

}

