import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Add this import
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './../../Services/account.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ] // Add CommonModule to the imports array
})

export class RegisterComponent {

  registerForm: FormGroup = new FormGroup({
    userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[a-zA-Z\d\W]{8,}$/)]),
    confirmPassword: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
    role: new FormControl(null, [Validators.required]),
  });

  constructor(private _AccountService: AccountService, private _Router: Router) { }

  onSubmit() {
    console.log(this.registerForm)
    //if (this.registerForm.invalid) {
      console.log("-------invalid=True-------")
      const formData = {
        userName: this.registerForm.value.userName,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        phoneNumber: this.registerForm.value.phoneNumber,
        role: this.registerForm.value.role
      };
      this._AccountService.register(formData).subscribe(
        {
          next: (respons) => {
            if (respons.success == true) {
              console.log("-------success=True----------")
              this._Router.navigate(["/login"]);
            }
            else {
              console.log("-------success=False----------")
            }
          }
        }
      )
    }
  //}
}