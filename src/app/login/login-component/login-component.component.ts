import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponentComponent implements OnInit {
title: string;
name: string;
  constructor() { 
    this.title="Welcome to login page"
    this.name="Sugata Maji"
  }

  ngOnInit() {
  }

}
