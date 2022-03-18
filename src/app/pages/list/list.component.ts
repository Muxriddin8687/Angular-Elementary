import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../model/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create the app',
      description: 'Using Firebase and Angular create Kanba app!'
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];
  doneList: any;
  inProgressList: any;

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  openModal(): void{
    const modal = document.querySelector(".modal");
    
  }







  ngOnInit(): void {
  }


  // mileci vewi
  newPost: any = '';
  enterValue = '';
  fileName = '';

  constructor(private http: HttpClient) {}
  
  // file upload function
  onFileSelected(event: any) {
    const file:File = event.target.files[0];
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
        const upload$ = this.http.post("/api/thubnails/", formData);
        upload$.subscribe( (data: any) => {
          console.log(data);
          
        });
        console.log(formData);

        // console.log(file);
        // console.log(upload$);
        // console.log(upload$.subscribe());
        
    }
  }    

  onAddPost(){
    this.newPost = this.enterValue;
  }

}
