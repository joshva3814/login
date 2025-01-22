import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-login',
  imports:[FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  // loginError: boolean = false;
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  onLogin(loginform:any) : void{
   
    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');

    if(loginform.invalid){
      return;
    }
    const storedUser = this.localStorageService.getItem('user');

    if (storedUser) {
      if (this.username === storedUser.username && this.password === storedUser.password) {
        this.router.navigate(['/home']); 
      } else {
        alert('Invalid username or password');
      }
    }

    // if (this.username === storedUsername && this.password === storedPassword) {
    //   console.log('Login successful!');
    //   this.loginError = false;
    //   this.router.navigate(['/home']);
    // } else {
    //   console.log('Invalid username or password');
    //   this.loginError = true;
    // }
    
  }
}
