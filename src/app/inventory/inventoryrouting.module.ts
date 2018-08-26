
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { ClientComponent } from "../client/client.component";
import { InventoryComponent }         from './inventory.component';
import { ContactComponent } from "../contact/contact.component";


const inventaryRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'client', component: ClientComponent },
    {path: 'inventory', component: InventoryComponent},
    {path: 'contact', component: ContactComponent},
 ];
 
 @NgModule({
    imports: [
       RouterModule.forRoot(inventaryRoutes)
    ],
    exports: [
       RouterModule
    ]
 })
 export class InventaryRoutingModule { }