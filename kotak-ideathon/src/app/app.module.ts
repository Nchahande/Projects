import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { AdminViewComponent } from './navigation-menu/admin-view/admin-view.component';
import { EmployeeViewComponent } from './navigation-menu/employee-view/employee-view.component';
import { ReviewerMenuComponent } from './navigation-menu/reviewer-menu/reviewer-menu.component';
import { ReassignDepartmentComponent } from './navigation-menu/admin-view/reassign-department/reassign-department.component';
import { RolesRightsComponent } from './navigation-menu/admin-view/roles-rights/roles-rights.component';
import { CreateIdeaComponent } from './navigation-menu/employee-view/create-idea/create-idea.component';
import { MyIdeasComponent } from './navigation-menu/employee-view/my-ideas/my-ideas.component';
import { PendingIdeasComponent } from './navigation-menu/reviewer-menu/pending-ideas/pending-ideas.component';
import { ReviewerViewComponent } from './navigation-menu/reviewer-menu/reviewer-view/reviewer-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from 'src/shared/services/data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeInfoComponent,
    NavigationMenuComponent,
    AdminViewComponent,
    EmployeeViewComponent,
    ReviewerMenuComponent,
    ReassignDepartmentComponent,
    RolesRightsComponent,
    CreateIdeaComponent,
    MyIdeasComponent,
    PendingIdeasComponent,
    ReviewerViewComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
