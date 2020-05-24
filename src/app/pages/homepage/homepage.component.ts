import { Component, OnInit } from '@angular/core';

declare function activeNavController();


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    activeNavController();
  }
  
}
