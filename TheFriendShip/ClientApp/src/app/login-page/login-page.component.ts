import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Form, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({

  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  model = new User();
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  submit(form: Form) {
    console.log('Submitted');
    this.authService.login(this.model).subscribe();
  }
}
