import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import client_data from './clients.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  clients = client_data;
  
  constructor() {
  }

}
