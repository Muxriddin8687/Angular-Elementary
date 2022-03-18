import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  constructor(public rest: CrudService, private router: Router) {}

  ngOnInit(): void {
  }

  addProduct(fs: NgForm): void{
    this.rest.addProducts(fs.value).subscribe( (result: any) =>{
      this.router.navigate(['/crudphp']);
    }, (err) => {
      console.log(err);
    });
  }

}
