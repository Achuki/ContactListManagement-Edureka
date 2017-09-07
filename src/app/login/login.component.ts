import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from './loginservice/authenticate.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticateService]
})
export class LoginComponent implements OnInit {
  user = new UserComponent('', '');
  errorMsg = '';

  constructor(private service: AuthenticateService) { }

  ngOnInit() {
  }

  login() {
    if (!this.service.login(this.user)) {
      this.errorMsg = 'Failed to login! try again ...';
    }
  }

}
