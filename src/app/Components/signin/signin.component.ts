import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './../../Services/account.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  
  loginForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  constructor(private _AccountService: AccountService, private _Router: Router) { }
  errorMessage:string='';
  onSubmit() {
    console.log(this.loginForm)
    //if (this.loginForm.invalid) {
      console.log("-------invalid=True-------")
      const formData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this._AccountService.login(formData).subscribe(
        {
          next: (respons) => {
            if (respons.success == true) {
              console.log("-------success=True----------")
              console.log(respons)
              this._Router.navigate(["/home"]);
            }
            else {
              console.log("-------success=False----------")
            }
          },
          error:(err)=>{
            console.log(err)
            this.errorMessage=err.error.message;
          }
        }
      )
    }

    navigateToRegister(){
      this._Router.navigate(["/register"]);
    }
}
