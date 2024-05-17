import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  IsLogin: boolean = false;
  constructor(private _AccountService: AccountService) {
    // this._AccountService.userInfo.subscribe({
    //   next: () => {
    //     if (_AccountService.userInfo.getValue() != null) {
    //       this.IsLogin = true;
    //       console.log("----------IsLogin----------")
    //       console.log(this.IsLogin)
    //     }
    //     else {
    //       this.IsLogin = false;
    //       console.log("----------IsLogin----------")
    //       console.log(this.IsLogin)
    //     }
    //   }
    // })
    const token = this.getTokenFromLocalStorage();
    if(token!=null)
      {
        this.IsLogin=true;
      }
  }

   getTokenFromLocalStorage() {
    return localStorage.getItem("userToken");
  }

  logout() {
    this._AccountService.logout();
  }
}
