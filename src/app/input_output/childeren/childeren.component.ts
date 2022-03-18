import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../Lesson';

@Component({
  selector: 'app-childeren',
  templateUrl: './childeren.component.html',
  styleUrls: ['./childeren.component.scss']
})

export class ChilderenComponent implements OnInit {
  @Input() lesson!: Lesson;
  @Output("changeTitle") titleChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onPlusBtnClick(){
    this.titleChange.emit(true);
  }

  onMinusBtnClick(){
    this.titleChange.emit(false);
  }

}
