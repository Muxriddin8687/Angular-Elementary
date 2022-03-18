import { Component, OnInit } from '@angular/core';
import { Products } from './model/products';
import { CrudService } from './services/crud.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-crud-php',
  templateUrl: './crud-php.component.html',
  styleUrls: ['./crud-php.component.scss']
})
export class CrudPhpComponent implements OnInit {
  @BlockUI('app-root') blockUI!: NgBlockUI;

  data: Products[] = [];

  constructor(private rest: CrudService, private router: Router){
    this.blockUI.start('Loading...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
    }, 1000);
  }

  ngOnInit(): void {
    this.getProduct();
  }

  // get all products
  public getProduct(): void{
    this.rest.getProducts().subscribe( (resp: any) => {
      this.data = resp;
    });
  }

  // deleteproduct by id
  delete(id: number): void{
    this.rest.deleteProduct(id).subscribe( () => {
      this.getProduct();
    },
      (err) => {
        console.log(err);
      }
    );
  }

  add(): void{
    this.router.navigate(['/product-add']);
  }

}
