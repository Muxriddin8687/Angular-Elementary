import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  // seryozniy content
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();


  ngOnInit(): void {
  }

}
