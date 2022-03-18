import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // properties
  @Input() productUpdate = { p_id: 0, p_name: '', p_description: '', p_price: ''};

  constructor( private rest: CrudService, public route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productDetail();
  }

  productDetail(): void{
    this.rest.getFind(this.route.snapshot.params.id).subscribe( (resp: any) => {
      this.productUpdate = resp;
    }, (err) => {
      console.log(err);
    });
  }

  onUpdate(ff: NgForm){
    // console.log(ff.value);
    this.rest.updateProduct(ff.value).subscribe( (result: any) =>{
      this.router.navigate(['/crudphp']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel(): void{
    this.router.navigate(['/crudphp']);
  }

}
