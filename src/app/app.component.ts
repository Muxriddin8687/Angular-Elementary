import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-dashboard';
  @BlockUI('app-root')
  blockUI!: NgBlockUI;
 
  constructor() {
    this.blockUI.start('Loading...'); // Start blocking
 
    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 2000);
  }
}