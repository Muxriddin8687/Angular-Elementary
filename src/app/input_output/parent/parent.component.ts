import { Component, OnInit } from '@angular/core';
import { Lesson } from '../Lesson';
import { LessonService } from '../Lesson.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit {

  lessons: Lesson[] | any;
  selectedLesson: Lesson | any;

  isActive: boolean = true;
  ngSwitch: number = 0;

  constructor(public LessonService: LessonService) {
    this.lessons = this.LessonService.getLessons();
  }

  selectLesson(lesson: Lesson): void{
    this.selectedLesson = lesson;
  }

  onTitleChange(isBool: boolean){
    isBool ? this.selectedLesson.title += '+' : this.selectedLesson.title += '-';
  }

  ngOnInit(): void { }

}
