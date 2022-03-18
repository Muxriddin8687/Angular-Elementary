import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  nextTask = 0;
  tasks = ['Soat 9 da yig\'ilish', 'Xizmat safari', 'Xisobot topshirish'];
  employees: string[] = ['Ali Valiev', 'Vali Aliyev', 'Zebo Aliev'];
  history: string[] = [];
  history1: any;

  constructor(private taskService: TaskService) {
    taskService.taskConfirmed$.subscribe(
      employee => {
        this.history.push(`${employee} qabul qildi.`);
      }
    )
  }

  ngOnInit(): void {
  }

  announce(){
    let task = this.tasks[this.nextTask++];
    this.taskService.announceTask(task);
    this.history.push(`"${task}" topshirig\'i e\'lon qilindi.`);
    
    if (this.nextTask >= this.tasks.length) {
      this.nextTask = 0;
    }
  }

}
