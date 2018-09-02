import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ClientComponent } from "./client/client.component";
import { ContactComponent } from "./contact/contact.component";



const appRoutes: Routes = [
   {path: 'home', component: HomeComponent },
   {path: 'client', component: ClientComponent },
   {path: 'contact', component: ContactComponent,}
];

@NgModule({
   imports: [
      RouterModule.forRoot(appRoutes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }