import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
const routes: Routes = [
  { path: 'donor-list', component: DonorListComponent },
  { path: 'add-donor/:lat/:lng', component: AddDonorComponent },
  { path: '',
    redirectTo: '/donor-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
