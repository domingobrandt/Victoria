
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { ClientComponent } from "../client/client.component";
import { InventoryComponent }         from './inventory.component';
import { ContactComponent } from "../contact/contact.component";
import { InventorylistComponent } from './inventorylist/inventorylist.component';
import { InventorydetailComponent } from './inventorydetail/inventorydetail.component';


const inventaryRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'client', component: ClientComponent },
    {path: 'inventory', component: InventoryComponent,
        children: [
           { path: '', redirectTo: 'list', pathMatch: 'full' },
           { path: 'list', component: InventorylistComponent },
           { path: 'detail', component: InventorydetailComponent },
           { path: 'detail/:id', component: InventorydetailComponent },
        ]},
    {path: 'contact', component: ContactComponent},
 ];
 
 @NgModule({
    imports: [
       RouterModule.forRoot(inventaryRoutes)
    ],
    exports: [
       RouterModule
    ],
    declarations: [InventorylistComponent, InventorydetailComponent]
 })
 export class InventaryRoutingModule { }