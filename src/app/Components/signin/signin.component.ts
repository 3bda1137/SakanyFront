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
              localStorage.setItem("userToken",respons.data.token);
              this._AccountService.setInformaionOfUser();
              this._Router.navigate(["/home"]);
            }
            else {
              console.log("-------success=False----------")
            }
          },
          error:(err)=>{
            console.log(err.error)
            this.errorMessage=err.error.message;
          }
        }
      )
    }
    navigateToRegister(){
      this._Router.navigate(["/register"]);
    }
}


// {
//   "success": true,
//   "data": {
//       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWJkYWxsYWgiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjExZWE5YWY2LTlkMzItNDE3Mi04NDk1LWZhMjNiMzY5NDc5NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkNVU1RPTUVSIiwiZXhwIjoxNzE1MTYwMjQ5LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMTkvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.AyOtzVXGecxTzH6S76pI4jB5oZKKsypKBMu8pBSRjNU",
//       "expired": "2024-05-08T09:24:09Z"
//   },
//   "message": "Login successful",
//   "errors": null
// }