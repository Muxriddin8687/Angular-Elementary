import { Injectable } from "@angular/core";
import { Lesson } from "./Lesson";

@Injectable({
  providedIn: "root"
})

export class LessonService {
  getLessons(): Lesson[] {
    let lessons: Lesson[] = [
      {"title": "Angular asoslari", "price": 50, "duration": 24, "intakeDeadline": "2022-03-13T23:59:59"},
      {"title": "C# asoslari", "price": 30, "duration": 16, "intakeDeadline": "2022-01-09T22:59:59"},
      {"title": "C++ asoslari", "price": 80, "duration": 36, "intakeDeadline": "2022-02-05T07:59:59"},
    ];

    return lessons;
  }
}