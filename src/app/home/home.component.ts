import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../login/loginservice/authenticate.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
username:string;
  constructor(private service: AuthenticateService) { }

  ngOnInit() {
    this.service.checkCredentials();
   this.username = this.service.getLoginUser();
  }

  logout()
  {
    this.service.logout();
  }

}
