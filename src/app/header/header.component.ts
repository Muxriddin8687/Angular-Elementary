import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  openNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.openNav = (this.openNav) ? false : true;
  }

}
