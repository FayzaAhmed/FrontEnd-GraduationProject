import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacilityService } from './shared/utilities/services/Facility/facility.service';
import { AgencyService } from './shared/utilities/services/Agency/agency.service';
import { ReviewService } from './shared/utilities/services/Review/review.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SignUpService } from './shared/utilities/services/sign-up/sign-up.service';
import { LoginService } from './shared/utilities/services/Login/login.service';
import { ProfileService } from './shared/utilities/services/Profile/profile.service';
import { ScrappingService } from './shared/utilities/services/Scrapping/scrapping.service';
import { DocumentService } from './shared/utilities/services/Documents/document.service';
import { SideBarToogleService } from './shared/utilities/services/SideBarToggle/side-bar-toogle.service';

@NgModule({
  declarations: [AppComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AgencyService, FacilityService, ReviewService, SignUpService, LoginService, ProfileService, ScrappingService, DocumentService, SideBarToogleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
