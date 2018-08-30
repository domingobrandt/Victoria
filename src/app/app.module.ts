import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { InventaryRoutingModule } from "./inventory/inventoryrouting.module";
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { InventoryComponent } from './inventory/inventory.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule }           from '@angular/http';
import { InventoryService } from './inventory/inventory.service';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatIconModule, MatInputModule, MatToolbarModule,
} from '@angular/material';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ContactComponent,
    InventoryComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,HttpModule,
    InventaryRoutingModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatDialogModule, MatIconModule, MatInputModule, MatToolbarModule,
    MatListModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
