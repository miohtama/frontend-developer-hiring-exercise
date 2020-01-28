import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterOnlyFrameComponent } from './footer-only-frame/footer-only-frame.component';
import { FullFrameComponent } from './full-frame/full-frame.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserHomeComponent,
    NavBarComponent,
    FooterOnlyFrameComponent,
    FullFrameComponent,
    FooterComponent,
    SignUpFormComponent,
    UserDashboardComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
