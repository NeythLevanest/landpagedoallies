import { Component, OnInit } from '@angular/core';

declare function activeNavController();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    activeNavController();
  }

}
