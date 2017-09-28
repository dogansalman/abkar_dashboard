import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { HttpModule } from '@angular/http';
import { ApiServices } from '../services/api.services';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CitiesModule } from '../shared/directive/cities/cities.module';
import { TownsModule } from '../shared/directive/towns/towns.module';
import { CapitalizeModule } from '../shared/pipes/capitalize/capitalize.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { CustomersModule } from '../shared/directive/customers/customers.module';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BsDatepickerActions } from 'ngx-bootstrap/datepicker/reducer/bs-datepicker.actions';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  imports: [
    OrdersRoutingModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CapitalizeModule,
    CitiesModule,
    TownsModule,
    CustomersModule,
    BsDatepickerModule.forRoot(),
    NguiAutoCompleteModule
  ],
  declarations: [ OrderComponent],
  providers: [
    ApiServices,
    BsDatepickerActions
  ]
})
export class OrdersModule { }
