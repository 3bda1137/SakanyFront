import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../Services/user-profile.service';
import { UserProfile } from '../../Interfaces/user-profile';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  userInfo!: UserProfile;

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService
  ) {}
  ngOnInit(): void {
    // this.profileForm = new FormGroup({
    //   email: new FormControl(""),
    //   userName: new FormControl("")
    // });

    this.userProfileService.getInfo().subscribe((data) => {
      this.userInfo = data;
      this.profileForm = this.formBuilder.group({
        userName: [this.userInfo.userName],
        email: [this.userInfo.email],
        phoneNumber: [this.userInfo.phoneNumber],
        secondPhoneNumber: [this.userInfo.secondPhoneNumber],
        age: [this.userInfo.age],
        gender: [this.userInfo.gender],
        maritalStatus: [this.userInfo.maritalStatus],
        education: [this.userInfo.education],
        employment: [this.userInfo.employment],
        job: [this.userInfo.job],
      });

      this.profileForm.valueChanges.subscribe((value) => {
        this.userInfo = { ...this.userInfo, ...value };
      });
    });
  }

  updateUserInfo(){
    console.log(this.userInfo.job);
    
    this.userProfileService.setInfo(this.userInfo).subscribe(
      (val) => {
        console.log("User info updated successfully.");
      },
      (err) => {
        console.log("Failed to update user info");
      },
    )
  }
}
