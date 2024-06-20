import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneComponent  } from './phone/phone.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent },
{ path: 'phone', component: PhoneComponent },
{ path: 'phoneDetails/:id', component: PhoneDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
