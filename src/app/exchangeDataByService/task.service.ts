import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskAnnouncedSource = new Subject<String>();
  private taskConfirmedSource = new Subject<String>();
  public taskAnnounced$ = this.taskAnnouncedSource.asObservable();
  public taskConfirmed$ = this.taskConfirmedSource.asObservable();

  constructor() { }

  announceTask(task: string): void{
    this.taskAnnouncedSource.next(task);
  }

  confirmTask(employee: string): void{
    this.taskConfirmedSource.next(employee);
  }
}
