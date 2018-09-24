import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import {ProveedorComponent} from './proveedor.component';
import { ProvlistComponent } from "./provlist/provlist.component";
import { ProvdetailComponent } from "./provdetail/provdetail.component";
import { ProveedorService } from "./proveedor.service";
import { ProveedorRoutingModule } from "./proveedor-routing.module";
@NgModule({
  declarations: [
    ProvdetailComponent,ProveedorComponent,ProvlistComponent
  ],

  imports: [
    CommonModule,HttpModule,ProveedorRoutingModule
  ],

  providers: [ProveedorService],
  exports:[
    ProvdetailComponent,ProveedorComponent,ProvlistComponent
  ],
})
export class ProveedorModule { }
