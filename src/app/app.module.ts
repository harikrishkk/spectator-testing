import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { PersonComponent } from './components/person/person.component';
import { HighlightDirective } from './directives/highlight.directive';
import { SumPipe } from './pipes/sum.pipe';
import { TotalComponent } from './components/total/total.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, PersonComponent, HighlightDirective, SumPipe, TotalComponent, HomeComponent, UserComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
