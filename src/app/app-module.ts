import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth-module';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard-module';
import { ProfileModule } from './profile/profile-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, AuthModule, CommonModule, DashboardModule, ProfileModule],
  bootstrap: [AppComponent]
})
export class AppModule {}