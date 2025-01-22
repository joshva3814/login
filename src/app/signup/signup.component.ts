import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-signup',
  imports:[FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  signupError: boolean = false;
  signupSuccess: boolean = false;
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  onSignUp(signupform:any) {
    if (signupform.invalid) {
      return; 
    }
    if (this.password !== this.confirmPassword) {
      this.signupError = true;
      this.signupSuccess = false;
      return;
    }
    const user = {
      username: this.username,
      password: this.password,
      role: 'user',
    };

    this.localStorageService.setItem('user', user);

    this.signupSuccess = true;
    this.signupError = false;

    setTimeout(()=>{this.router.navigate(['login']);},3000)

    this.username = '';
    this.password = '';
    this.confirmPassword = '';
  }
  
}
