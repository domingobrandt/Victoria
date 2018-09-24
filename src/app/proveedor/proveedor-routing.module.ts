import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';


import {ProveedorComponent} from './proveedor.component';
import { ProvlistComponent } from "./provlist/provlist.component";
import { ProvdetailComponent } from "./provdetail/provdetail.component";

const proveedorRoutes: Routes =[
  {path: 'proveedor', component: ProveedorComponent,
    children:[
      {path: '', redirectTo:'listp', pathMatch: 'full'},
      {path:'listp', component: ProvlistComponent },
      {path:'detialp', component:ProvdetailComponent},
      {path:'detialp/:id', component:ProvdetailComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(proveedorRoutes)
  ],
  exports: [RouterModule],
})
export class ProveedorRoutingModule { }
