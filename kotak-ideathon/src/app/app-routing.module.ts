import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './navigation-menu/admin-view/admin-view.component';
import { RolesRightsComponent } from './navigation-menu/admin-view/roles-rights/roles-rights.component';
import { EmployeeViewComponent } from './navigation-menu/employee-view/employee-view.component';
import { ReviewerMenuComponent } from './navigation-menu/reviewer-menu/reviewer-menu.component';

const routes: Routes = [
  { path: '', component: EmployeeViewComponent },
  { path: 'reviewer', component: ReviewerMenuComponent },
  { path: 'admin', component: AdminViewComponent },
  { path: 'admin/settings', component: RolesRightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
