import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import {ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule }           from '@angular/http';
import {ReactiveFormsModule } from '@angular/forms';
import { InventoryModule } from './inventory/inventory.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import 'hammerjs';
import { AppRoutingModule } from './/app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule,MatInputModule,MatToolbarModule,} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent,
    ContactComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    InventoryModule,
    ProveedorModule,
    BrowserAnimationsModule,
    HttpModule,
    FlexLayoutModule,
    FormsModule, 
    AppRoutingModule,
    MatMenuModule,MatButtonModule,MatSelectModule,
    MatChipsModule,MatCheckboxModule,MatSidenavModule,
    MatTableModule,MatPaginatorModule,MatSortModule,
    MatDialogModule, MatIconModule, MatInputModule,
    MatToolbarModule,
    MatListModule,MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
