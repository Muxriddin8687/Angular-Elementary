import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  announced: boolean = false;
  confirmed: boolean = false;

  @Input() employee!: string;
  task: string = 'Topshiriq yo\'q';

  constructor(private taskService: TaskService) {
    taskService.taskAnnounced$.subscribe(
      (task: any) => {
        this.task = task;
        this.announced = true;
        this.confirmed = false;
      }
    )
  }

  confirm(){
    this.confirmed = true;
    this.taskService.confirmTask(this.employee);
  }

  ngOnInit(): void {
  }
}
