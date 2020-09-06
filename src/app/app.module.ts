import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { userservice } from './services/userservice.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpperNavComponent,
    SignUpComponent,
    HomeComponent,
    LogInComponent,
    CategoryNavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [userservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
