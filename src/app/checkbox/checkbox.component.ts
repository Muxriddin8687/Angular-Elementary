import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }
  counter: number = 0;
  isCheck: boolean = true;
  isRed: boolean = false;

  updateCounter(num: number){
    let add = this.counter % 2;
    this.counter = this.counter + num;
    this.isRed = this.counter > 10 ? true : false;
    if(add){
      this.isCheck = true;
    }else{
      this.isCheck = false;
    }
  }


  addRandomNumber(){
    // this.counter = Math.random() > 0.5 ?  2 : 3;
    this.counter = this.counter + Math.floor(Math.random() * (3 - 2 + 1) + 2);
    this.isRed = this.counter > 10 ? true : false;
    if(this.counter % 2){
      this.isCheck = false;
    }else{
      this.isCheck = true;
    }
  }


  ngOnInit(): void {
  }

}
