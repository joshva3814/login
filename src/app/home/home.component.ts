import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-home',
  imports:[CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  username: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (storedUsername && storedPassword) {
      this.isLoggedIn = true;
      this.username = storedUsername; 
    }
  }

  redirectToLogin(): void {
    this.router.navigate(['/login']); 
  }

 
  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.isLoggedIn = false;
    this.username = null;
    this.router.navigate(['/login']);  
  }
}
