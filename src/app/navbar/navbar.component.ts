import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}
  navbarCollapsed = true;
 
  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
  logout(): void {
    // Clear authentication state (e.g., remove token from localStorage)
    localStorage.removeItem('token');
    localStorage.getItem
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
