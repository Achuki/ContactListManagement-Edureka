import { Injectable } from '@angular/core';
import { UserComponent } from '../../user/user.component';
import { Router } from '@angular/router';


var users = [
  new UserComponent('admin', 'admin'),
  new UserComponent('user', 'user')
];

@Injectable()
export class AuthenticateService {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }

  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", authenticatedUser.username);
      this.router.navigate(['/home']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this.router.navigate(['/login']);
    }
  }

  getLoginUser(): string {
    return localStorage.getItem("user");
  }
}
