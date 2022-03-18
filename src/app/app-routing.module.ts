import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryPageComponent } from './country-page/country-page.component';
import { InformationComponent } from './information/information.component';
import { CrudPhpComponent } from './crud-php/crud-php.component';
import { ListComponent } from './pages/list/list.component';
import { ProductAddComponent } from './crud-php/product-add/product-add.component';
import { ProductDetailComponent } from './crud-php/product-detail/product-detail.component';
import { ParentComponent } from './input_output/parent/parent.component';
import { ChilderenComponent } from './input_output/childeren/childeren.component';
import { ManagementComponent } from './exchangeDataByService/management/management.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const routes: Routes = [
  {
    path: '',
    component: InformationComponent
  },
  {
    path: 'check',
    component: CheckboxComponent
  },
  {
    path: 'country/:id',
    component: CountryPageComponent
  },
  {
    path: 'crudphp',
    component: CrudPhpComponent
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent
  },
  {
    path: 'product-add',
    component: ProductAddComponent
  },
  {
    path: 'animation',
    component: ListComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  },
  {
    path: 'input_output',
    component: ParentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
