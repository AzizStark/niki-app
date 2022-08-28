import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DesignationTableComponent } from './main/dashboard/designation-table/designation-table.component';
import { ManagementTableComponent } from './main/dashboard/management-table/management-table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddDesignationModalComponent } from './main/dashboard/designation-table/add-designation-modal/add-designation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    DesignationTableComponent,
    ManagementTableComponent,
    AddDesignationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
