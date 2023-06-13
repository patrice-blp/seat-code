import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import("./features/dashboard/dashboard-routing.module").then(m => m.DashboardRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
