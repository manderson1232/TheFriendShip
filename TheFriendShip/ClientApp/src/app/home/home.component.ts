import { Component, OnInit } from '@angular/core';
import { NgForm, Form } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = new User();
  constructor() { }

  ngOnInit() {

  }
  submit(form: Form) {
    console.log('Submitted');
    console.log(this.model);
    console.log(form);
  }
}
