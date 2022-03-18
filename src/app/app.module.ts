import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { InformationComponent } from './information/information.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { CrudPhpComponent } from './crud-php/crud-php.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AnimationComponent } from './pages/animation/animation.component';
import { ListComponent } from './pages/list/list.component';
import { ProductAddComponent } from './crud-php/product-add/product-add.component';
import { ProductDetailComponent } from './crud-php/product-detail/product-detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ParentComponent } from './input_output/parent/parent.component';
import { ChilderenComponent } from './input_output/childeren/childeren.component';
import { ManagementComponent } from './exchangeDataByService/management/management.component';
import { EmployeeComponent } from './exchangeDataByService/employee/employee.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    InformationComponent,
    CountryPageComponent,
    CrudPhpComponent,
    SpinnerComponent,
    AnimationComponent,
    ListComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ParentComponent,
    ChilderenComponent,
    ManagementComponent,
    EmployeeComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: SpinnerComponent,
    }),
    DragDropModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ SpinnerComponent ]
})
export class AppModule { }
