import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClientlistComponent, ClientdetailComponent]
})
export class ClientModule { }
